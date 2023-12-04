import React, { useState } from "react"
import "../style/SavedScroll.css"

export default function SavedScroll(props) {
    const [categoryClicked, setCategoryClicked] = useState(null)
    
    return (
        <div id="scroll-component">
            <button id={categoryClicked === "politics" ? "clicked-topic" : "topic"} onClick={() => {
                if (categoryClicked !== "politics") {
                    props.setCategory("politics")
                    setCategoryClicked("politics")
                } else {
                    props.setCategory(null)
                    setCategoryClicked(null)
                }
            }}> Politics </button>

            <button id={categoryClicked === "world news" ? "clicked-topic" : "topic"} onClick={() => {
                if (categoryClicked !== "world news") {
                    props.setCategory("world news")
                    setCategoryClicked("world news")
                } else {
                    props.setCategory(null)
                    setCategoryClicked(null)
                }
            }}> World News </button>            
            
            <button id={categoryClicked === "media" ? "clicked-topic" : "topic"} onClick={() => {
                if (categoryClicked !== "media") {
                    props.setCategory("media")
                    setCategoryClicked("media")
                } else {
                    props.setCategory(null)
                    setCategoryClicked(null)
                }
            }}> Media </button>

            <button id={categoryClicked === "technology" ? "clicked-topic" : "topic"} onClick={() => {
                if (categoryClicked !== "technology") {
                    props.setCategory("technology")
                    setCategoryClicked("technology")
                } else {
                    props.setCategory(null)
                    setCategoryClicked(null)
                }
            }}> Technology </button>

            <button id={categoryClicked === "us news" ? "clicked-topic" : "topic"} onClick={() => {
                if (categoryClicked !== "us news") {
                    props.setCategory("us news")
                    setCategoryClicked("us news")
                } else {
                    props.setCategory(null)
                    setCategoryClicked(null)
                }
            }}> US News </button>

            <button id={categoryClicked === "sports" ? "clicked-topic" : "topic"} onClick={() => {
                if (categoryClicked !== "sports") {
                    props.setCategory("sports")
                    setCategoryClicked("sports")
                } else {
                    props.setCategory(null)
                    setCategoryClicked(null)
                }
            }}> Sports </button>

            <button id={categoryClicked === "health" ? "clicked-topic" : "topic"} onClick={() => {
                if (categoryClicked !== "health") {
                    props.setCategory("health")
                    setCategoryClicked("health")
                } else {
                    props.setCategory(null)
                    setCategoryClicked(null)
                }
            }}> Health </button>

            <button id={categoryClicked === "music" ? "clicked-topic" : "topic"} onClick={() => {
                if (categoryClicked !== "music") {
                    props.setCategory("music")
                    setCategoryClicked("music")
                } else {
                    props.setCategory(null)
                    setCategoryClicked(null)
                }
            }}> Music </button>

            <button id={categoryClicked === "science" ? "clicked-topic" : "topic"} onClick={() => {
                if (categoryClicked !== "science") {
                    props.setCategory("science")
                    setCategoryClicked("science")
                } else {
                    props.setCategory(null)
                    setCategoryClicked(null)
                }
            }}> Science </button>

            <button id={categoryClicked === "business" ? "clicked-topic" : "topic"} onClick={() => {
                if (categoryClicked !== "business") {
                    props.setCategory("business")
                    setCategoryClicked("business")
                } else {
                    props.setCategory(null)
                    setCategoryClicked(null)
                }
            }}> Business </button>
        </div>
    )
}
