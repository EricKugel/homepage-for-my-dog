import { getSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { toast } from "react-hot-toast";

import Editor from "../../components/Editor";

const Write = () => {
  const router = useRouter();
  const [data, setData] = useState("");
  const [editorLoaded, setEditorLoaded] = useState(false);

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  const pushEntry = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/write", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data,
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
      <Editor name="description" onChange = {(journal_data) => setData(journal_data)} editorLoaded = {editorLoaded}/>
      <button onClick={pushEntry}>Push Entry</button>
      <div>{data}</div>
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