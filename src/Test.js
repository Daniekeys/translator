import React from 'react'
import { useTranslation } from "react-i18next";


const data = [
    {
        text:"list1",
        id:1
    },
    {
        text:"list2",
        id:2
    },
    {
        text:"list3",
        id:3
    },
]
const Test = () => {
    const { t } = useTranslation();
     const releaseDate = new Date("2021-05-07");
     const timeDifference = new Date() - releaseDate;
     const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return (
      <>
        <div className="d-flex flex-column align-items-start bg-primary text-white px-4">
            <h1>{t("random")}</h1>
          <h1 className="font-weight-normal mb-3">{t("welcome_message")}</h1>
          <p>{t("days_since_release", { number_of_days })}</p>
          {
              data.map((item,index) => {
                  return <p >{t(item.text)}</p>
              })
          }
        </div>
      </>
    );
}

export default Test