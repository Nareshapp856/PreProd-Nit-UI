import React from "react";
import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Box,
} from "@mui/material";

const TopicSelection3 = ({ topics, selectedTopics, onTopicChange }) => {
  const handleCheckboxChange = (topic) => {
    onTopicChange(topic.TopicID); // Pass the full topic object back to the parent
  };

  return (
    <Box mb={4}>
      <FormControl component="fieldset" fullWidth>
        <FormLabel component="legend" className="block text-gray-700">
          Topics
        </FormLabel>
        <FormGroup row>
          {topics.length > 0
            ? topics.map((topic) => (
                <FormControlLabel
                  key={topic.TopicID}
                  control={
                    <Checkbox
                      checked={selectedTopics.includes(topic.TopicID)} // Use `includes` to check if the topic is already selected
                      onChange={() => handleCheckboxChange(topic)} // Pass TopicID to the handler
                    />
                  }
                  label={topic.TopicName}
                />
              ))
            : "No Topics available for this module"}
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default TopicSelection3;