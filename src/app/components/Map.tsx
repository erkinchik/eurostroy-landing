import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import {useMemo} from "react";

const Map = () => {
    const locations = useMemo(() => [
        {
            name: 'Рынок "Уста"',
            address: 'улица Асаналиева, 16а',
            position: { lat: 42.863770, lng: 74.569484 },
        },
        {
            name: 'Рынок "Баткен"',
            address: 'улица Льва Толстого, 19',
            position: { lat: 42.865750, lng: 74.569014 }
        },
        {
            name: 'Улица Матросова, 5а',
            position: { lat: 42.849332, lng: 74.619189 }
        },
        {
            name: 'Улица Шопокова, 89/2',
            position: { lat: 42.870093, lng: 74.615051 }
        },
        {
            name: 'ЭлитСтрой',
            address: 'проспект Дэн Сяопина, 18/4',
            position: { lat: 42.8653, lng: 74.5907 }
        }
    ], []);

    const center = useMemo(() => ({
        lat: locations.reduce((sum, loc) => sum + loc.position.lat, 0) / locations.length,
        lng: locations.reduce((sum, loc) => sum + loc.position.lng, 0) / locations.length
    }), [locations]);

    return (
        <LoadScript googleMapsApiKey={'AIzaSyDmrLs66-crVs3in8bimQCrk60bdpT6pkQ'}>
            <GoogleMap
                mapContainerStyle={{ width: '100%', height: '600px' }}
                center={center}
                zoom={13}
            >
                {locations.map((location, index) => (
                    <Marker
                        key={index}
                        position={location.position}
                        title={`${location.name}${location.address ? `, ${location.address}` : ''}`}
                    />
                ))}
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;
