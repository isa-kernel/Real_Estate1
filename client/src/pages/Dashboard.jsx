import {
  useEffect,
  useState
} from "react";

import AdminLayout from "../layouts/AdminLayout";

import Spinner from "../components/common/Spinner";

import StatCard from "../components/StatCard";

import {
  getStats
} from "../services/dashboardService";
import Footer  from "../components/layout/Footer";

import "../styles/dashboard.css";

function Dashboard() {

  const [stats,setStats] =
  useState(null);

  const [loading,setLoading] =
  useState(true);

  useEffect(()=>{

    const loadStats = async()=>{

      try{

        const token =
        localStorage.getItem(
          "token"
        );

        const data =
        await getStats(token);

        setStats(data);

      }
      catch(error){

        console.log(error);

      }
      finally{

        setLoading(false);

      }

    };

    loadStats();

  },[]);

  if(loading){

    return <Spinner />;

  }

  return (
<>
    <AdminLayout>

      {/* <h1>
        Dashboard Overview
      </h1> */}

      <div className="stats-grid">

        <StatCard
          title="Properties"
          value={stats.properties}
        />

        {/* <StatCard
          title="Lands"
          value={stats.lands}
        /> */}

        <StatCard
          title="Inquiries"
          value={stats.inquiries}
        />

        {/* <StatCard
          title="Bookings"
          value={stats.bookings}
        /> */}
        
        
      </div>
      

    </AdminLayout>
<Footer />
</>
  );
}

export default Dashboard;