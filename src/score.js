import React, { useEffect, useState } from "react";
import {map} from 'lodash' ;
import axios from 'axios';
export default function Score() {

    const [datas, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios ("https://animalfinderapi.herokuapp.com/score");

            setData(res.data.data);
            console.log(res.data);
        }
        fetchData();
    }, [])

    return (
        <div className="score">
            <React.Fragment>
                {
                    datas.map((data) =>
                    <p> <img class="img-avatar" src={data.avatar}></img>  User: {data.username}   score: {data.score}</p>
                        )
                }
            </React.Fragment>
        </div>
    )
}

