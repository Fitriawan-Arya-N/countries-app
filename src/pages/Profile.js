import React, { useState, useEffect } from "react";
import axios from "axios";

const username = ["Fitriawan-Arya-N"];

const token = ['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'];

export default function Profile() {
  const [data, setData] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://api.github.com/users/" + username,{
          headers:{"Authorization": "" + token}
        })
        .then(res => setData(res.data))
        .catch(error => alert("Error!", error));
    };
    fetchData();
  }, []);

  return (
    <section className="font-family: Montserrat flex font-medium items-center justify-center h-screen">

    <section className="w-72 mx-auto bg-[#0284c7] rounded-2xl px-8 py-6 shadow-lg">
    <div className="">
      <h1 className="text-white font-bold text-center text-2xl mb-5 ">Profile</h1>
      
      <div class="flex justify-center" alt="profile picture" srcset="">
        <img class="rounded-full w-28" srcset="" src={data.avatar_url} alt={data.login} />
      </div>

    <div className="text-white font-light text-xl tracking-wide">
      <div className="text-white font-bold text-2xl text-center mb-2">{data.name}</div>
      <div >Username : {data.login}</div>
      <div >ID : {data.id}</div>
      <div >Email : {data.email}</div>
      <div >Followers : {data.followers}</div>
      <div >Following : {data.following}
      </div>
      <div >Public Repositories : {data.public_repos}</div>
      <div >Public Gists : {data.public_repos}</div>
      <div>{data.bio}</div>
    </div>
    </div>
    </section>

    </section>
  );
}
