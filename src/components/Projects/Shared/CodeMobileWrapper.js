import { useState } from "react";
import CodeIcon from "@mui/icons-material/Code";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import { Button } from "@mui/material";

function CodeMobileWrapper({ children, title = "Missing Title" }) {
  const [hidden, setHidden] = useState(true);

  return (
    <div className="w-full">
      <Button
        startIcon={hidden ? <CodeIcon /> : <CodeOffIcon />}
        variant="contained"
        className="hidden max-w-full screen-md:inline-flex normal-case screen-md:mt-2 mb-2"
        onClick={() => {
          setHidden(!hidden);
        }}
      >
        <span className="overflow-hidden text-ellipsis whitespace-nowrap">
          Code Snippet: {title}
        </span>
      </Button>
      <div
        className={
          hidden ? "w-full screen-md:h-0 screen-md:overflow-hidden" : "w-full"
        }
      >
        {children}
      </div>
    </div>
  );
}

export default CodeMobileWrapper;
