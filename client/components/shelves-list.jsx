import React from 'react';

function Location(props) {

  return (
    <div>
      <li style={{
        backgroundColor: 'lightgrey',
        width: '15rem'
      }} className='mt-2' >

        <div className='row px-1'>
          <div className='col-4'>
            <h5>
              {props.shelf.zoneId}
            </h5>
          </div>
          <div className='col'>
            <p>{props.shelf.shelfName}</p>
          </div>
        </div>

      </li>
    </div>
  );
}

export default function ShelvesList(props) {

  return (

    < div className = 'd-flex justify-content-center' >
      <ul style={{
        listStyle: 'none'
      }}>
        {
          props.shelves.map(shelf => {
            return <Location key={shelf.entryId} shelf={shelf} />;
          })
        }
      </ul>
    </div >

  );
}
