import React from 'react';

function Location(props) {
  return (
    <>
      <div className='row' />
      <li style={{
        backgroundColor: 'lightgrey',
        width: '15rem'
      }} className='mt-2' >
        <div className='row'>
          <h5 className='pl-3' >Zone {props.warehouse.zoneId}:</h5>
          <p style={{ fontSize: '1rem', cursor: 'pointer' }} className='pl-3' >
            {props.warehouse.facilityName}
          </p>
        </div>
      </li>
    </>
  );
}

export default function WarehouseList(props) {

  return (
    <div className='d-flex justify-content-center'>

      <ul style={{
        listStyle: 'none'
      }}>
        {props.zones.map(warehouse => {
          return <Location key={warehouse.zoneId} warehouse={warehouse} />;
        })}
      </ul>

    </div>
  );
}
