import React from "react";


const comments = [
    {
        'user': 'Luis+Ed',
        'date': '28/12/23',
        'comment': 'Excellent store highly recommended'
    },
    {
        'user': 'Maria+Rosa',
        'date': '29/12/23',
        'comment': 'Fantastic experience! Will definitely come back.'
    },
    {
        'user': 'Alex+Hernandez',
        'date': '30/12/23',
        'comment': 'Quick delivery and great customer service.'
    },
    {
        'user': 'Jessica+Cortes',
        'date': '31/12/23',
        'comment': 'Amazing selection of products. Loved it!'
    }
];



const Comments = () =>{
    return (
        
       <article className="px-20 pb-20 space-y-8">
            <h3 className="text-2xl font-semibold">Our comments</h3>
            <div className="flex gap-4 justify-center">
                {
                    comments.map((comment, index) => (
                        <div key={index} className="flex items-center gap-8 bg-purple-100 rounded px-6 py-4 shadow">
                            <img className="rounded-full shadow h-16" src={`https://ui-avatars.com/api/?background=random&name=${comment.user}`} alt="User Name" />
                            <div className="space-y-1">
                                <h3 className="text-sm font-semibold">{comment.date}</h3>
                                <p className="text-md font-semibold ">{comment.comment}</p>
                                <div>

                                </div>
                            </div>    
                        </div>
                    ))
                }
            </div>
       </article>
    )
}


export default Comments