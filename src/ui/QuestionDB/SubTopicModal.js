import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField, Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function TopicMuiModel_New({
  flag,
  technologyData,
  ModuleData,
  topicData,
  addClick,
  editRow,
}) {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [technologyid, setTechnologyId] = React.useState(0);
  const [moduleId, setModuleId] = React.useState(0);
  const [topic, setTopic] = React.useState("");
  const [topicDesc, setTopicDesc] = React.useState("");
  const [modulefilterData, setModuleData] = React.useState([]);
  const [topicfilterData, setTopicData] = React.useState([]);

  const onChangeTechnology = (event) => {
    var technologySelected = event.target.value;
    setTechnologyId(technologySelected);
    var filterModuleDataa = ModuleData.filter(
      (x) => x.TechnologyID === technologySelected
    );
    setModuleData(filterModuleDataa);
  };
  const onChangeModule = (event) => {
    var moduleSelected = event.target.value;
    setModuleId(moduleSelected);
    var filteTopicDataa = topicData.filter(
      (x) => x.moduleID === moduleSelected
    );
    setTopicData(filteTopicDataa);
  };
  const onChangeTopic = (event) => {
    var inputTopic = event.target.value;
    setTopic(inputTopic);
  };
  React.useEffect(() => {
    if (flag === "edit") {
      setTechnologyId(editRow.TechnologyID);
      setTopic(editRow.TopicName);
      var filterModuleDataa = ModuleData.filter(
        (x) => x.TechnologyID === editRow.TechnologyID
      );
      setModuleData(filterModuleDataa);
      setModuleId(editRow.ModuleID);
    }
  }, []);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h2>Create Topic</h2>
          </Typography>
          <Typography id="modal-modal-description">
            <React.Fragment>
              {/* <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="First Name"
                        // onChange={e => setFirstName(e.target.value)}
                        // value={firstName}
                        fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Last Name"
                        // onChange={e => setLastName(e.target.value)}
                        // value={lastName}
                        fullWidth
                        required
                    />
                </Stack> */}
              <FormControl sx={{ m: 1, minWidth: 220 }}>
                <h1>Technologies</h1>
                <Select
                  value={technologyid}
                  onChange={(event) => {
                    onChangeTechnology(event);
                  }}
                  fullWidth
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value={0}>
                    <em>None</em>
                  </MenuItem>
                  {technologyData?.map((rec) => {
                    return (
                      <MenuItem value={rec.TechnologyID}>
                        {rec.TechnologyName}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <FormControl sx={{ m: 0.5, minWidth: 220 }}>
                <h1>Modules</h1>
                <Select
                  value={moduleId}
                  onChange={(event) => {
                    onChangeModule(event);
                  }}
                  // onChange={onChangeModule}
                  fullWidth
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="0">
                    <em>None</em>
                  </MenuItem>
                  {modulefilterData?.map((rec) => {
                    return (
                      <MenuItem value={rec.ModuleID}>{rec.ModuleName}</MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <FormControl sx={{ m: 0.5, minWidth: 220 }}>
                <h1>Topics</h1>
                <Select
                  value={moduleId}
                  onChange={(event) => {
                    onChangeModule(event);
                  }}
                  // onChange={onChangeModule}
                  fullWidth
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="0">
                    <em>None</em>
                  </MenuItem>
                  {topicfilterData?.map((rec) => {
                    return (
                      <MenuItem value={rec.TopicID}>{rec.TopicName}</MenuItem>
                    );
                  })}
                </Select>
              </FormControl>

              <FormControl sx={{ m: 0.5, minWidth: 200 }}>
                <h1>Sub Topic</h1>
                <TextField
                  color="secondary"
                  onChange={(e) => onChangeTopic(e)}
                  // onChange={e => setDateOfBirth(e.target.value)}
                  value={topic}
                  fullWidth
                  required
                />
              </FormControl>
              <FormControl sx={{ m: 0.5, minWidth: 200 }}>
                <h1>Description</h1>
                <TextField
                  color="secondary"
                  onChange={(e) => setTopicDesc(e.target.value)}
                  value={topicDesc}
                  fullWidth
                />
              </FormControl>
              <FormControl sx={{ m: 0.5, minWidth: 200 }}>
                {flag !== "edit" ? (
                  <Button
                    disabled={
                      technologyid === 0 || moduleId === 0 || topic === ""
                    }
                    variant="outlined"
                    color="secondary"
                    type="submit"
                    onClick={() => {
                      var iteminner = {
                        TechnologyID: technologyid,
                        moduleID: moduleId,
                        Topic: topic,
                        Description: topicDesc,
                        action: flag,
                      };
                      addClick(iteminner);
                    }}
                  >
                    Add
                  </Button>
                ) : (
                  <Button
                    disabled={
                      technologyid === 0 || moduleId === 0 || topic === ""
                    }
                    variant="outlined"
                    color="secondary"
                    type="submit"
                    onClick={() => {
                      var iteminner = {
                        TopicID: editRow.TopicID,
                        TechnologyID: technologyid,
                        moduleID: moduleId,
                        Topic: topic,
                        Description: topicDesc,
                        action: flag,
                      };
                      addClick(iteminner);
                    }}
                  >
                    Edit
                  </Button>
                )}
              </FormControl>
            </React.Fragment>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default TopicMuiModel_New;