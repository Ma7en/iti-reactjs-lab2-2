/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import list_item from "./../../../data/list_item.js";
import skills from "./../../../data/skills.js";
import ListItem from "./lsitItem/listItem.jsx";
import Skill from "./skill/Skill.jsx";

export default function Skills() {
    // // =
    // const [data, setData] = useState([]);
    // const [elements, setElements] = useState([]);

    // // تحميل البيانات (يمكنك استبدال هذه البيانات ببيانات من API أو قاعدة بيانات)
    // useEffect(() => {
    //     const fetchedData = [
    //         { name: "عبدالله", age: 30 },
    //         { name: "محمد", age: 25 },
    //         { name: "أحمد", age: 35 },
    //     ];
    //     setData(fetchedData);
    // }, []);

    // // إنشاء العناصر باستخدام forEach
    // useEffect(() => {
    //     const tempElements = [];
    //     data.forEach((person, index) => {
    //         tempElements.push(
    //             <div key={index}>
    //                 <p>
    //                     الاسم: {person.name}، العمر: {person.age}
    //                 </p>
    //             </div>
    //         );
    //     });
    //     setElements(tempElements);
    // }, [data]);

    return (
        <>
            {/* <div className="skills text-bg-dark " style={{ height: "100vh" }}></div> */}
            <div className="skills text-bg-dark ">
                <div className="container py-5">
                    <div className="title text-center mb-5">
                        <h2 className="fs-1 fw-bold text-capitalize ">
                            Skills
                        </h2>

                        <p className="text-secondary">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Est nobis voluptates iusto eius numquam
                            ratione consectetur dolor ducimus? A optio eum qui
                            laudantium beatae, esse inventore nobis, odit
                            temporibus molestias fugiat eveniet doloremque odio
                            dolorum totam officiis, tenetur nihil? Quidem?
                        </p>
                    </div>

                    <div className="content row g-5">
                        <div className="list col-12 col-md-4 mb-5">
                            <ul className="list-group  list-group-flush ">
                                {list_item.map((item, index) => {
                                    return (
                                        <ListItem items={item} key={index} />
                                    );
                                })}

                                {/* <br />
                                <div>mazeb</div>
                                <br />
                                {elements} */}
                            </ul>
                        </div>

                        <div className="skill-list col-12 col-md-8 ">
                            {skills.map((skill) => {
                                return <Skill skills={skill} key={skill.id} />;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
