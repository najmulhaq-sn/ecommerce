import { FunctionComponent, useState } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import styles from "./Time.module.css";

export type TimeType = {
  className?: string;
};

const Time: FunctionComponent<TimeType> = ({ className = "" }) => {
  const [frameDateTimePickerValue, setFrameDateTimePickerValue] =
    useState(null);
  const [frameDateTimePicker1Value, setFrameDateTimePicker1Value] =
    useState(null);
  const [frameDateTimePicker2Value, setFrameDateTimePicker2Value] =
    useState(null);
  const [frameDateTimePicker3Value, setFrameDateTimePicker3Value] =
    useState(null);
  const [frameDateTimePicker4Value, setFrameDateTimePicker4Value] =
    useState(null);
  const [frameDateTimePicker5Value, setFrameDateTimePicker5Value] =
    useState(null);
  const [frameDateTimePicker6Value, setFrameDateTimePicker6Value] =
    useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={[styles.frame, className].join(" ")}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.frame1}>
              <TimePicker
                label="9:00 AM - 10:00 PM"
                value={frameDateTimePickerValue}
                onChange={(newValue: any) => {
                  setFrameDateTimePickerValue(newValue);
                }}
                sx={{}}
                slotProps={{
                  textField: {
                    size: "medium",
                    fullWidth: true,
                    required: false,
                    autoFocus: true,
                    error: false,
                    color: "primary",
                    placeholder: "9:00 AM - 10:00 PM",
                  },
                  openPickerIcon: {
                    component: () => <></>,
                  },
                }}
              />
            </div>
            <div className={styles.frame1}>
              <TimePicker
                label="9:00 AM - 10:00 PM"
                value={frameDateTimePicker1Value}
                onChange={(newValue: any) => {
                  setFrameDateTimePicker1Value(newValue);
                }}
                sx={{}}
                slotProps={{
                  textField: {
                    size: "medium",
                    fullWidth: true,
                    required: false,
                    autoFocus: true,
                    error: false,
                    color: "primary",
                    placeholder: "9:00 AM - 10:00 PM",
                  },
                  openPickerIcon: {
                    component: () => <></>,
                  },
                }}
              />
            </div>
            <div className={styles.frame1}>
              <TimePicker
                label="9:00 AM - 10:00 PM"
                value={frameDateTimePicker2Value}
                onChange={(newValue: any) => {
                  setFrameDateTimePicker2Value(newValue);
                }}
                sx={{}}
                slotProps={{
                  textField: {
                    size: "medium",
                    fullWidth: true,
                    required: false,
                    autoFocus: true,
                    error: false,
                    color: "primary",
                    placeholder: "9:00 AM - 10:00 PM",
                  },
                  openPickerIcon: {
                    component: () => <></>,
                  },
                }}
              />
            </div>
            <div className={styles.frame1}>
              <TimePicker
                label="9:00 AM - 10:00 PM"
                value={frameDateTimePicker3Value}
                onChange={(newValue: any) => {
                  setFrameDateTimePicker3Value(newValue);
                }}
                sx={{}}
                slotProps={{
                  textField: {
                    size: "medium",
                    fullWidth: true,
                    required: false,
                    autoFocus: true,
                    error: false,
                    color: "primary",
                    placeholder: "9:00 AM - 10:00 PM",
                  },
                  openPickerIcon: {
                    component: () => <></>,
                  },
                }}
              />
            </div>
            <div className={styles.frame1}>
              <TimePicker
                label="9:00 AM - 10:00 PM"
                value={frameDateTimePicker4Value}
                onChange={(newValue: any) => {
                  setFrameDateTimePicker4Value(newValue);
                }}
                sx={{}}
                slotProps={{
                  textField: {
                    size: "medium",
                    fullWidth: true,
                    required: false,
                    autoFocus: true,
                    error: false,
                    color: "primary",
                    placeholder: "9:00 AM - 10:00 PM",
                  },
                  openPickerIcon: {
                    component: () => <></>,
                  },
                }}
              />
            </div>
            <div className={styles.frame1}>
              <TimePicker
                label="9:00 AM - 10:00 PM"
                value={frameDateTimePicker5Value}
                onChange={(newValue: any) => {
                  setFrameDateTimePicker5Value(newValue);
                }}
                sx={{}}
                slotProps={{
                  textField: {
                    size: "medium",
                    fullWidth: true,
                    required: false,
                    autoFocus: true,
                    error: false,
                    color: "primary",
                    placeholder: "9:00 AM - 10:00 PM",
                  },
                  openPickerIcon: {
                    component: () => <></>,
                  },
                }}
              />
            </div>
            <div className={styles.frame1}>
              <TimePicker
                label="9:00 AM - 10:00 PM"
                value={frameDateTimePicker6Value}
                onChange={(newValue: any) => {
                  setFrameDateTimePicker6Value(newValue);
                }}
                sx={{}}
                slotProps={{
                  textField: {
                    size: "medium",
                    fullWidth: true,
                    required: false,
                    autoFocus: true,
                    error: false,
                    color: "primary",
                    placeholder: "9:00 AM - 10:00 PM",
                  },
                  openPickerIcon: {
                    component: () => <></>,
                  },
                }}
              />
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.mondayWrapper}>
              <div className={styles.monday}>{`Monday `}</div>
            </div>
            <div className={styles.mondayWrapper}>
              <div className={styles.monday}>Tuesday</div>
            </div>
            <div className={styles.wednesdayWrapper}>
              <div className={styles.wednesday}>{`Wednesday `}</div>
            </div>
            <div className={styles.mondayWrapper}>
              <div className={styles.monday}>Thursday</div>
            </div>
            <div className={styles.fridayWrapper}>
              <div className={styles.friday}>{`Friday `}</div>
            </div>
            <div className={styles.saturdayWrapper}>
              <div className={styles.saturday}>{`Saturday `}</div>
            </div>
            <div className={styles.mondayWrapper}>
              <div className={styles.monday}>Sunday</div>
            </div>
          </div>
        </div>
        <div className={styles.shopOpeningHours}>Shop Opening Hours</div>
        <nav className={styles.frameNav}>
          <div className={styles.frame8}>
            <div className={styles.getDirectionsWrapper}>
              <h2 className={styles.getDirections} direction>
                Get Directions
              </h2>
            </div>
            <input
              className={styles.rectangleInput}
              readOnly={true}
              type="checkbox"
              icn
            />
          </div>
          <img className={styles.frameChild} alt="" src="/vector-1@2x.png" />
        </nav>
      </div>
    </LocalizationProvider>
  );
};

export default Time;
