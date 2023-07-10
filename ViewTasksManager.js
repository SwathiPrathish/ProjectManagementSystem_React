import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ViewTasksManager = () => {
  const [taskData, setTaskData] = useState(null);

  useEffect(() => {
    loadTaskData();
  }, []);

  const loadTaskData = async () => {
    try {
      const data = await AsyncStorage.getItem('taskData');
      if (data) {
        const parsedData = JSON.parse(data);
        setTaskData(parsedData);
      }
    } catch (error) {
      console.error('Error loading task data:', error);
    }
  };

  return (
    <View style={styles.container}>
      {taskData ? (
        <View>
          <Text>Task ID: {taskData.taskId}</Text>
          <Text>Task Name: {taskData.taskName}</Text>
          <Text>Task Description: {taskData.taskDescription}</Text>
          <Text>Assigned To: {taskData.assignedTo}</Text>
          <Text>Task Start Date: {taskData.taskStartDate}</Text>
          <Text>Task End Date: {taskData.taskEndDate}</Text>
          <Text>Hourly Rate: {taskData.hourlyRate}</Text>
        </View>
      ) : (
        <Text>No task data available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ViewTasksManager;
