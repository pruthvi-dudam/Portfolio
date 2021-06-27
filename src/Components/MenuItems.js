import React from 'react'

function MenuItems({menuItem}) {
    return (
        <div className="projects">
            {
                menuItem.map((item)=>{
                    return <div className="project" key={item.id}>
                        <div className="image-data">
                            <img src={item.image} alt=""/>
                            <ul className="hover-items">
                                <li>
                                    <a href={item.link}>{item.icon}</a>
                                    <a href={item.link1}>{item.icon1}</a>
                                </li>

                            </ul>
                        </div>
                        <h5>
                            {item.title}
                            <div className="item-title">
                                <div className="para">
                                   <p>{item.para}</p> 
                                </div>
                            <p>{item.para0}</p>
                            <p>{item.para1}</p>
                            <p>{item.para2}</p>
                            <p>{item.para3}</p>
                            </div>
                        </h5>
                    </div>
                })
            }
        </div>
    )
}

export default MenuItems;
