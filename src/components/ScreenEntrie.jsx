import React from 'react'
import moment from 'moment'
import { activeNote } from '../actions/notes';
import { useDispatch } from 'react-redux';

const ScreenEntrie = ({id,date,title,body,url}) => {

    const dispatch = useDispatch()
    const Notedate = moment(date);

    const handleentryclick = ()=>{
        dispatch(activeNote(id,{
            date,title,body,url
        }))
    }

    return (
        <div className="screen__entry pointer"
        onClick={ handleentryclick }>
          {  url &&
          
          <div className="screen__entry-picture"
            style={{    backgroundSize:'cover',
                        backgroundImage:`url(${url})`
                    
                    }}
            >
            </div>}
            <div className="screen__entry-body">
                <p className="screen__entry-title">{title}</p>
                <p className="screen__entry-content">{body}</p>
            </div>
            <div className="screen__entry-date">
                <span>{Notedate.format('dddd')}</span>
                <h4>27</h4>
            </div>
        </div>
    )
}

export default ScreenEntrie
