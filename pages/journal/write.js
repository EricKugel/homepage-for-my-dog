import { getSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { toast } from "react-hot-toast";

import dynamic from "next/dynamic";

const FroalaEditor = dynamic(
  async () => {
    const plugins = [
      "link",
      "colors",
      "entities",
      "font_size",
      "lists",
      "quote",
    ];
    const imports = [
      import("react-froala-wysiwyg"),
      import("froala-editor/css/froala_style.min.css"),
      import("froala-editor/css/froala_editor.pkgd.min.css"),
    ];
    plugins.map((plugin) => {
      imports.push(import("froala-editor/js/plugins/" + plugin + ".min.js"));
    });
    const values = await Promise.all(imports);
    return values[0];
  },
  {
    loading: () => <p>Patience, young grasshopper.</p>,
    ssr: false,
  }
);

const Write = (props) => {
  const router = useRouter();
  const [data, setData] = useState("");

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
      <div className="hey">Hey hey, let's write some stuff!</div>
      <FroalaEditor tag="textarea" model={data} onModelChange={setData} />
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
