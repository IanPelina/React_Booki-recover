import './Activities.scss';

export default function Activities({activity}) {
    
    return (
        <div  className='activity-card'>
            <article  className="activités-carte vieux-port">
                <img src={activity.cover} alt={activity.alt} />
                    <div  className="contenu-carte">
                        <div  className="carte-txt">
                            <h3  className="carte-titre">{activity.title}</h3>
                        </div>
                    </div>
            </article>
        </div>
    )
}