import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./Footer/footer";
import Options from "./Options/options";
import { getCountries } from "../../Store/Home/homeActions";
import { clearCountryStore } from "../../Store/Home/homeSlice";
import { tabs } from "./constants";
import "./home.css"


const Home = () => {

  const dispatch = useDispatch();
  const [selectedTab, setSelectedTab] = useState("All");
  const [loader, setLoader] = useState(false);
  const [openOptions, toggleOptions] = useState(false);
  const [countries, setCountries] = useState([])

  const {
    countriesStore = [],
  } = useSelector((state) => state.home);

  useEffect(() => {
    setLoader(true)
    dispatch(getCountries(setLoader));

    return () => {
      dispatch(clearCountryStore())
    }
  }, [dispatch]);


  const filterCountries = (region) => {
    if (countriesStore && countriesStore.length > 0) {
      return countriesStore.filter((country) => country.region === region)
    }
    return [];
  }

  useEffect(() => {
    if (selectedTab === "All") {
      setCountries(countriesStore);
    } else {
      setCountries(filterCountries(selectedTab));
    }
  }, [selectedTab, countriesStore])



  return (<div className="home">
    <div className="title-container">
      <div className="title">Countries</div>
      <div className="tabs">{tabs.map((tab, index) =>
        <div key={index} className={selectedTab === tab ? "tab-active" : "tab"} onClick={() => { setSelectedTab(tab) }}>{tab}</div>)}
      </div>
      <div className="more-icon" onClick={() => toggleOptions(!openOptions)}><img src="./assets/options.png" alt="img" />
        {openOptions && <Options selectedTab={selectedTab} setSelectedTab={setSelectedTab} />}
      </div>

    </div>
    {loader ? <div>Loading...</div> :
      <div className="countries">
        {countries && countries.length > 0 ? countries.map((country, index) =>
          <div key={index} className="country">
            <div className="country-box">
              <div className="country-flag">
                <img src={country.flag} loading="lazy" alt="img" />
              </div>
              <div>
                <div className="country-name">{country.name}</div>
                <div className="country-region">{country.region}</div>
              </div>
            </div>
          </div>) : <div>No Records To Display</div>}
      </div>}
    <Footer />
  </div>);
}

export default Home;