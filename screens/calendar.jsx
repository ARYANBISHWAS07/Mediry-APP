import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Agenda } from "react-native-calendars";
import styled from "styled-components/native";
import { format } from "date-fns";

function App() {
  const [expandedItems, setExpandedItems] = useState({});
  const today = format(new Date(), "yyyy-MM-dd");

  const items = {
    [today]: [
      {
        name: "Today's Medication Schedule",
        data: "List of medicines for the day.",
        timings: [
          { time: "10:00 AM", medicine: "Paracetamol" },
          { time: "02:00 PM", medicine: "Vitamin D" },
          { time: "08:00 PM", medicine: "Ibuprofen" },
        ],
      },
    ],
    "2024-03-28": [
      {
        name: "Medication Schedule",
        data: "Medicines for the scheduled day.",
        timings: [
          { time: "09:00 AM", medicine: "Aspirin" },
          { time: "01:00 PM", medicine: "Calcium Tablet" },
          { time: "07:00 PM", medicine: "Cough Syrup" },
        ],
      },
    ],
  };

  const toggleExpand = (itemName) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  return (
    <SafeArea>
      <View style={styles.container}>
        <Agenda
          items={items}
          renderItem={(item) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => toggleExpand(item.name)}
            >
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.itemText}>{item.data}</Text>
              {expandedItems[item.name] && (
                <View style={styles.expandedSection}>
                  {item.timings.map((schedule, index) => (
                    <Text key={index} style={styles.expandedText}>
                      {schedule.time} - {schedule.medicine}
                    </Text>
                  ))}
                </View>
              )}
            </TouchableOpacity>
          )}
          renderEmptyData={() => (
            <View
              style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            >
              <Text style={{ fontSize: 22, color: "gray" }}>
                No items available
              </Text>
            </View>
          )}
          selected={today}
        />
      </View>
    </SafeArea>
  );
}

export default App;

const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: #3450a1;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  item: {
    backgroundColor: "lightblue",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 25,
  },
  itemText: {
    color: "black",
    fontSize: 16,
  },
  expandedSection: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
  },
  expandedText: {
    fontSize: 14,
    color: "gray",
  },
});
