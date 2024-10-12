"use client";
import { useState } from "react";

interface ShowAlert {
  show: boolean;
  text: string;
  type: string;
}
const useAlert = () => {
  const [alert, setAlert] = useState({ show: false, text: "", type: "danger" });

  const showAlert = ({ text, type = "danger" }: ShowAlert) =>
    setAlert({ show: true, text, type });
  const hideAlert = (show: boolean) =>
    setAlert({ show, text: "", type: "danger" });

  return { alert, showAlert, hideAlert };
};

export default useAlert;
