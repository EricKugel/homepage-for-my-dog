import { getSession } from "next-auth/react";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

import { toast } from "react-hot-toast";

import styles from "./write.module.css"

const Write = () => {
  const router = useRouter();
  const [data, setData] = useState({value: ""});

  const pushEntry = async (e) => {
    var new_data = data.value;
    new_data = "<p>" + new_data.replaceAll("\n", "<br/>") + "</p>";
    
    e.preventDefault();
    const response = await fetch("/api/write", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: new_data,
      }),
    });

    if (response?.ok) {
      toast.success("Journal entry pushed");
      router.push("/journal");
    } else {
      toast.error(response.json().message);
    }
  };


  return (
    <>
      <textarea
          className = {styles.editor}
          onChange={(e) => {
            setData({...data, value: e.target.value})
          }}
          contentEditable = {true}
          value = {data.value}
        ></textarea>

      <button onClick={pushEntry}>Push Entry</button>
    </>
  );
};

export default Write;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (session) {
    return {
      props: {},
    };
  } else {
    return {
      redirect: {
        destination: "/authorize",
        permanent: false,
      },
    };
  }
};