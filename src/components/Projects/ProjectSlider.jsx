import { useEffect, useState } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { getProjectsNumberByIndustry } from "../ProjectList";
import { useSearchParams } from "react-router-dom";

const CustomTabs = styled(Tabs)({
  borderRadius: "9999px",
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.92), rgba(248,250,252,0.86))",
  border: "1px solid rgba(148, 163, 184, 0.28)",
  boxShadow: "0 16px 36px rgba(15, 23, 42, 0.08)",
  padding: "6px",
  minHeight: "unset",
  gap: "8px",
  "& .MuiTabs-indicator": {
    display: "none",
  },
});

const CustomTab = styled(Tab)({
  minHeight: "unset",
  padding: "12px 18px",
  borderRadius: "9999px",
  textTransform: "none",
  letterSpacing: "0.01em",
  color: "rgb(15 23 42)",
  backgroundColor: "transparent",
  border: "1px solid transparent",
  transition: "all 180ms ease",
  zIndex: 1,
  "&:hover": {
    backgroundColor: "rgba(15, 23, 42, 0.05)",
  },
  "&.Mui-selected": {
    color: "white",
    background: "linear-gradient(135deg, rgb(8 47 73), rgb(14 116 144))",
    boxShadow: "0 12px 24px rgba(8, 47, 73, 0.16)",
  },
});

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
        className="text-center pb-4 text-cyan-700 font-medium tracking-wide to-fade-in"
      >
        <b>Click</b> on a project to view it with more details
      </Typography>
      <Box className="mx-auto mb-8 w-full max-w-4xl px-0 to-fade-in">
        <CustomTabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{ style: { display: "none" } }}
        >
          <CustomTab
            disableRipple
            label={`All (${getProjectsNumberByIndustry("all")})`}
          />
          <CustomTab
            disableRipple
            label={`Gaming (${getProjectsNumberByIndustry("gaming")})`}
          />
          <CustomTab
            disableRipple
            label={`Software & Web (${getProjectsNumberByIndustry("software")})`}
          />
        </CustomTabs>
      </Box>
    </>
  );
};

export default ProjectSlider;
