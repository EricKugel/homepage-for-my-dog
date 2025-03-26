import { getSession } from "next-auth/react";
import Link from "next/link";
import Journal from "../../models/journal";
import { connectDB } from "../../helpers/mongohelper";

import styles from "./JournalPage.module.css";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const pad = (how_many, s, str) => {
  stringg = "" + str;
  while (stringg.length() < how_many) {
    stringg = s + stringg;
  }
  return stringg;
}

const formatDate = (dateString) => {
  const date = new Date(dateString);
  var output = months[date.getMonth()] + " ";
  output += date.getDate() + ", ";
  output += date.getFullYear() + ", ";
  output += pad(2, "0", date.getHours()) + ":" + pad(2, "0", date.getMinutes());
  return output;
};

const JournalPage = ({ journals }) => {
  return (
    <>
      <div>You made it!</div>
      <Link href="journal/write">Write a journal entry</Link>
      {journals &&
        journals.map((journal) => (
          <div key={journal._id} className={styles.journal}>
            <div className={styles.date}>{formatDate(journal.date)}</div>
            <div
              className={styles.journalContent}
              dangerouslySetInnerHTML={{ __html: journal.journal }}
            ></div>
          </div>
        ))}
    </>
  );
};

export default JournalPage;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (session) {
    await connectDB();
    const journals = JSON.parse(JSON.stringify(await Journal.find().sort("-date").lean()));
    return {
      props: { journals },
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
