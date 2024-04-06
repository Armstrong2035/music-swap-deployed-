import React from "react";
import {
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  Typography,
  MobileStepper,
} from "@mui/material";
import OutboundIcon from "@mui/icons-material/Outbound";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SyncIcon from "@mui/icons-material/Sync";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export default function StepperComponent({ activeStep }) {
  const steps = [
    { name: "Transfer From", icon: OutboundIcon },
    { name: "Select music to transfer", icon: CheckCircleIcon },
    { name: "Transfer To", icon: CloudUploadIcon },
    { name: "Confirm Transfer", icon: SyncIcon },
  ];

  return (
    <>
      <MobileStepper
        variant="progress"
        steps={4}
        position="static"
        activeStep={activeStep}
      />
      {/* <Stepper activeStep={activeStep} connector={<StepConnector />}>
        {steps.map((step) => {
          return;
          <>
            <Step key={step.name}>
              <StepLabel StepIconComponent={step.icon}>
                <Typography>{step.name}</Typography>
              </StepLabel>
            </Step>
          </>;
        })}
      </Stepper> */}
      ;
    </>
  );
}
