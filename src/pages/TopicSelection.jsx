import React from "react";
import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Box,
  Radio,
} from "@mui/material";

const TopicSelection = ({ topics, selectedTopics, onTopicChange }) => {
  const handleCheckboxChange = (topic) => {
    onTopicChange(topic); // Pass the full topic object back to the parent
  };

  return (
    <Box mb={4}>
      <FormControl component="fieldset" fullWidth>
        <FormLabel component="legend" className="block text-gray-700">
          Topics
        </FormLabel>
        <FormGroup row>
          {topics.map((topic) => (
            <FormControlLabel
              key={topic.TopicID}
              control={
                <Checkbox
                  checked={selectedTopics.includes(topic.TopicID)} // Check if TopicID exists in selectedTopics array
                  onChange={() => handleCheckboxChange(topic.TopicID)} // Handle toggle logic
                />
              }
              label={topic.TopicName}
            />
          ))}
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default TopicSelection;