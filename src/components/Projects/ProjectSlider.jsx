import { useEffect, useState } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { getProjectsNumberByIndustry } from "../ProjectList";
import { useSearchParams } from "react-router-dom";

// Custom styled Tabs component with border, border-radius, and custom styles
const CustomTabs = styled(Tabs)({
  border: "1px solid #ccc",
  borderRadius: "8px",
  backgroundColor: "#f9f9f9",
  minHeight: "unset",
  "& .MuiTabs-indicator": {
    height: "100%",
    borderRadius: "8px",
    zIndex: -1,
    transition: "transform 0.3s ease",
  },
});

// Custom styled Tab component with conditional styles for the selected state
const CustomTab = styled(Tab)(({ theme, selected }) => ({
  minHeight: "unset",
  padding: "8px 16px",
  borderRadius: "8px",
  textTransform: "none", // Removes the default uppercase styling
  fontWeight: 500,
  color: selected ? "white !important" : "rgb(0 30 60)", // Inverted color for text when selected
  backgroundColor: selected ? "rgb(0 30 60)" : "transparent", // Background color when selected
  zIndex: 1,
}));

const industryToIndex = (value) => {
  switch (value) {
    case "all":
      return 0;
    case "gaming":
      return 1;
    case "software":
      return 2;
    default:
      return 0;
  }
};

const ProjectSlider = ({ industry, setIndustry }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const projectsPreference = searchParams.get("pref");

  const [value, setValue] = useState(industryToIndex(industry));

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        setIndustry("all");
        break;
      case 1:
        setIndustry("gaming");
        break;
      case 2:
        setIndustry("software");
        break;
      default:
        setIndustry("all");
        break;
    }
  };

  /* eslint-disable */
  useEffect(() => {
    if (projectsPreference === "web" || projectsPreference === "software") {
      handleChange(null, 2);
    } else if (projectsPreference === "gaming") {
      handleChange(null, 1);
    }
    setSearchParams((params) => {
      params.delete("pref");
      return params;
    });
  }, []);
  /* eslint-enable */

  return (
    <>
      <Typography
        variant="subtitle1"
        className="text-center pb-4 text-cyan-600 to-fade-in"
      >
        <b>Click</b> on a project to view it with more details
      </Typography>
      <Box className="w-3/4 screen-lg:w-full m-auto mb-6 to-fade-in">
        <CustomTabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{ style: { display: "none" } }} // Hides the default underline
        >
          <CustomTab
            disableRipple
            label={"All (" + getProjectsNumberByIndustry("all") + ")"}
          />
          <CustomTab
            disableRipple
            label={"Gaming (" + getProjectsNumberByIndustry("gaming") + ")"}
          />
          <CustomTab
            disableRipple
            label={
              "Software & Web (" + getProjectsNumberByIndustry("software") + ")"
            }
          />
        </CustomTabs>
      </Box>
    </>
  );
};

export default ProjectSlider;
