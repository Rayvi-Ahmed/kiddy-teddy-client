import { useEffect } from "react";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import ClientCard from "./ClientCard/ClientCard";

const Clients = () => {
    const [clients, setClients] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setClients(data))
    }, [])
    return (
        <div>
            <h1 className="text-2xl lg:text-4xl text-cyan-500 text-center font-bold py-8">Our  Clients</h1>
            <Marquee>
                <div className="flex lg:justify-center items-center gap-3">

                    <div>

                    </div>
                    {
                        clients.map(client => <ClientCard
                            key={client._id}
                            client={client}
                        ></ClientCard>)
                    }


                </div>
            </Marquee>

        </div>
    );
};

export default Clients;