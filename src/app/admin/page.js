"use client";
import React, { useState, useCallback, useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { getAuth } from "firebase/auth";
import firebase_app from "@/firebase/config";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import Link from "next/link";



const API_KEY = "pub_355268450123fdbb0a64d6479c71fb76ef7e7";
function Page() {
  const [news, setNews] = useState([]);
  const { user } = useAuthContext();
  const router = useRouter();
  const auth = getAuth(firebase_app);

  const onSignOut = useCallback(() => {
    void auth.signOut();
  }, [auth]);

  const loadNews = async () => {
    const response = await fetch(
      `https://newsdata.io/api/1/news?apikey=pub_355268450123fdbb0a64d6479c71fb76ef7e7&q=pizza`
    );
    const newsList = await response.json();
    setNews(newsList.results);
    console.log(newsList);
  };

  const handleArticleClick = (link) => {
    window.open(link);
  };


  useEffect(() => {
    if (user == null) router.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    loadNews();
  }, []);

  return (
    
    <div style={{ backgroundColor: '#12343b' }}>
      
      <Navbar bg="sand" expand="lg" className="flex gap-8 p-4">
    <Navbar.Brand href="#home" className="text-2xl font-bold" style={{ paddingLeft: '20px', paddingRight: '20px', fontSize: '40px', color: 'white' }}>
      New 24/7
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" className=" row-auto border-none" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="flex gap-4 mr-auto" dir="right">
        <Nav.Link href="/" className="row-auto text-gray-800" style={{ color: 'white', textDecoration: 'none' }} activeStyle={{ color: 'white', textDecoration: 'underline' }} hoverStyle={{ color: 'yellow', textDecoration: 'underline' }}>
          Home
        </Nav.Link>
        <Nav.Link href="/news" className="text-gray-800" style={{ color: 'white', textDecoration: 'none' }} activeStyle={{ color: 'white', textDecoration: 'underline' }} hoverStyle={{ color: 'yellow', textDecoration: 'underline' }}>
          News
        </Nav.Link>
        <Nav.Link href="/about" className="text-gray-800" style={{ color: 'white', textDecoration: 'none' }} activeStyle={{ color: 'white', textDecoration: 'underline' }} hoverStyle={{ color: 'yellow', textDecoration: 'underline' }}>
          About
        </Nav.Link>
        <Button
          variant="outline-danger"
          onClick={onSignOut}
          className="border-none ml-2"
          style={{ color: 'white' }}
        >
          Sign Out
        </Button>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

      {/* <button onClick={onSignOut}>Sign Out</button> */}

      <div className="flex justify-center flex-wrap gap-4">
  {news.map((article) => (
    <div
      key={article.url} // Add a unique key prop
      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      style={{ height: '300px' , overflow: 'hidden',  textOverflow: 'ellipsis', paddingBottom: '10px'}}
      onClick={() => handleArticleClick(article.link)}
    >
      <h1>{article.title}</h1>
      <img
        src={article.image_url || "https://via.placeholder.com/150"}
        alt={article.title}
        className="w-full h-32 object-cover"
        style={{ paddingBottom: '10px' }}
      />
      <p>{article.description}</p>
    </div>
  ))}
</div>
    </div>
  );
}

export default Page;
