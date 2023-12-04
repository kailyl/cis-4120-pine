import "../style/Saved.css"
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import SavedArticle from "./SavedArticle";
import SavedScroll from "./SavedScroll";
import DropdownSaved from "./DropdownSaved";
import allJsonData from '../data/all-articles.json'

export default function Saved() {
    const [allArticlesJsonDataState, setAllArticlesJsonDataState] = useState(null)
    const [savedArticles, setSavedArticles] = useState([]);
    const [allArticlesMapping, setAllArticlesMapping] = useState({})
    const [saved, setSaved] = useState(false);

    const [category, setCategory] = useState(null);
    const [sort, setSort] = useState(null);

    console.log(sort)

    const handleSave = (bookmarked) => {
        setSaved(bookmarked)
    }

    useEffect(() => {
        setAllArticlesJsonDataState(allJsonData);
    }, []);

    useEffect(() => {
        if (allArticlesJsonDataState) {
            const newArticles = {};
            
            allArticlesJsonDataState.forEach((article) => {
                const articleComponent = (
                    <SavedArticle
                        setSaved={handleSave}
                        cover={article.background} 
                        heading={article.heading}
                        subheading={article.subheading}
                        author={article.author}
                        date={article.date}
                        image={article.image}
                        credits={article.credits}
                        body={article.body}
                        tags={article.tags}
                    />
                );
                
                newArticles[article.heading] = articleComponent;
            });
    
            setAllArticlesMapping(newArticles);
        }
    }, [allArticlesJsonDataState]);

    useEffect(() => {
        let savedArticles = localStorage.getItem('savedArticles');
        let saved = JSON.parse(savedArticles);
        if (saved === null) {
            saved = []
        }

        const allSaved = saved.map((title) => {
            return (
                allArticlesMapping[title]
            )
        })
        setSavedArticles(allSaved);

    }, [allArticlesMapping])

    const filteredSavedArticles = category
        ? savedArticles.filter((article) => article.props.tags.includes(category))
        : savedArticles;

    const sortedSavedArticles = filteredSavedArticles.slice().sort((a, b) => {
        if (sort === 'Date') {
            return new Date(a.props.date) - new Date(b.props.date);
        } else if (sort === 'Author') {
            return a.props.author.localeCompare(b.props.author);
        } else if (sort === 'Title') {
            return a.props.heading.localeCompare(b.props.heading);
        }
        return 0;
    });

    return (
        <div>                
            <h1 id="saved-heading"> SAVED ARTICLES</h1>
            <SavedScroll setCategory={setCategory}/>
            <DropdownSaved setSort={setSort}/>
            <div id="saved">
                <div id="saved-articles">
                    {sortedSavedArticles}
                </div>
            </div>
            <div id="nav-bar-style">
                <NavBar savedArticle={saved}/> 
            </div>
        </div>
    )
}