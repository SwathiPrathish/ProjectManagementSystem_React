import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CreateTaskPage = () => {
  const [taskId, setTaskId] = useState('');
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [taskStartDate, setTaskStartDate] = useState('');
  const [taskEndDate, setTaskEndDate] = useState('');
  const [hourlyRate, setHourlyRate] = useState('');

  const handleTaskIdChange = (text) => {
    setTaskId(text);
  };

  const handleTaskNameChange = (text) => {
    setTaskName(text);
  };

  const handleTaskDescriptionChange = (text) => {
    setTaskDescription(text);
  };

  const handleAssignedToChange = (text) => {
    setAssignedTo(text);
  };

  const handleTaskStartDateChange = (text) => {
    setTaskStartDate(text);
  };

  const handleTaskEndDateChange = (text) => {
    setTaskEndDate(text);
  };

  const handleHourlyRateChange = (text) => {
    setHourlyRate(text);
  };

  const handleSubmit = async () => {
    const taskData = {
      taskId,
      taskName,
      taskDescription,
      assignedTo,
      taskStartDate,
      taskEndDate,
      hourlyRate,
    };

    try {
      // Save taskData to async storage
      await AsyncStorage.setItem('taskData', JSON.stringify(taskData));
      Alert.alert('Success', 'Task data saved successfully!');
    } catch (error) {
      console.error('Error saving task data:', error);
      Alert.alert('Error', 'Failed to save task data.');
    }
  };

  const handleViewTasks = async () => {
    try {
      const data = await AsyncStorage.getItem('taskData');
      if (data) {
        const parsedData = JSON.parse(data);
        Alert.alert(
          'Task Data',
          `Task ID: ${parsedData.taskId}\nTask Name: ${parsedData.taskName}\nTask Description: ${parsedData.taskDescription}\nAssigned To: ${parsedData.assignedTo}\nTask Start Date: ${parsedData.taskStartDate}\nTask End Date: ${parsedData.taskEndDate}\nHourly Rate: ${parsedData.hourlyRate}`
        );
      } else {
        Alert.alert('No Task Data', 'There is no task data available.');
      }
    } catch (error) {
      console.error('Error retrieving task data:', error);
      Alert.alert('Error', 'Failed to retrieve task data.');
    }
  };

  return (
    <View style={styles.managerContainer}>
      <TextInput
        style={styles.input}
        placeholder="Task ID"
        value={taskId}
        onChangeText={handleTaskIdChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Task Name"
        value={taskName}
        onChangeText={handleTaskNameChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Task Description"
        value={taskDescription}
        onChangeText={handleTaskDescriptionChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Assigned To"
        value={assignedTo}
        onChangeText={handleAssignedToChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Task Start Date"
        value={taskStartDate}
        onChangeText={handleTaskStartDateChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Task End Date"
        value={taskEndDate}
        onChangeText={handleTaskEndDateChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Hourly Rate"
        value={hourlyRate}
        onChangeText={handleHourlyRateChange}
      />
      <Button title="Submit" onPress={handleSubmit} />
      <Button title="View Tasks" onPress={handleViewTasks} />
    </View>
  );
};

const styles = StyleSheet.create({
  managerContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 8,
    width: '80%',
    maxWidth: 400,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default CreateTaskPage;



