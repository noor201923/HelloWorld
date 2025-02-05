import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [task, setTask] = useState(''); // Current task state
  const [tasks, setTasks] = useState([]); // Tasks array

  const addTask = () => {
    if (task) {
      setTasks([...tasks, { key: Math.random().toString(), value: task }]);
      setTask('');
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.key !== taskId));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>To-Do List</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a task"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Add Task" onPress={addTask} />
      <FlatList
        data={tasks}
        renderItem={(itemData) => (
          <View style={styles.taskItem}>
            <Text>{itemData.item.value}</Text>
            <TouchableOpacity onPress={() => deleteTask(itemData.item.key)}>
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 30,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  taskItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ddd',
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deleteText: {
    color: 'red',
  },
});
