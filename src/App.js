import {useEffect} from 'react'
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from 'js-cookie'
import Test from './Test'

const languages = [
  {
    code: "fr",
    name: "français",
    country_code: "fr",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "ar",
    name: "عربي",
    country_code: "sa",
    dir:'rtl'
  },
];


function App() {
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find(l => l.code === currentLanguageCode);

  const {t} = useTranslation();
  const releaseDate = new Date('2021-05-07')
  const timeDifference = new Date() - releaseDate
  const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

  useEffect(() => {
    document.body.dir = currentLanguage.dir || 'ltr';
    document.title = t('app_title')
  },[currentLanguage])
  return (
    <div className="container">
      <div className="d-flex  justify-content-end">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Change Language
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <span className="dropdown-item-text">
                </span>{t('language')} </li>
            {languages.map(({code, name, country_code}) => (
              <li key={country_code}>
              <button className="dropdown-item" onClick={() => i18next.changeLanguage(code)} disabled={code === currentLanguageCode} >
                <span className={`flag-icon flag-icon-${country_code} mx-2`} 
                style={{ opacity:code === currentLanguage ? 0.2 :1}}
                ></span>
                {name}
              </button>
            </li>
              
            ))}
       
          
          </ul>
        </div>
      </div>
      <div className="d-flex flex-column align-items-start">
        <h1 className="font-weight-normal mb-3">{t("welcome_message")}</h1>
        <p>{t("days_since_release", { number_of_days })}</p>
      </div>
      <Test />
    </div>
  );
}

export default App;
