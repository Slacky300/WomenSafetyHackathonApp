import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/auth';
import toast from 'react-hot-toast';
import reports from '../images/report.png';
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

const Report = () => {
    const [report, setReport] = useState('');
    const [pincodeOfIncident, setPincodeOfIncident] = useState('');
    const [address, setAddress] = useState('');
    const [mimeType, setMimeType] = useState('');
    const [note, setNote] = useState(null);
    const [auth, setAuth] = useAuth();
    const [user, setUser] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        setNote(file);
        setMimeType(file.type);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!report.trim()) {
            toast.error('Report is Required!');
            return false;
        }
        if (!pincodeOfIncident.trim()) {
            toast.error('PinCode is Required!');
            return false;
        }
        if (!address.trim()) {
            toast.error('Address is Required!');
            return false;
        }
        try {
            setUser(auth?.user?._id);

            const data = {
                user: auth?.user?._id,
                report: report,
                address: address,
                pincodeOfIncident: pincodeOfIncident,
                mimeType: mimeType,
                note: note,
            }

            // const res = await axios.post(
            //     'https://womensecbackend.onrender.com/api/v1/incidents',
            //     {
            //         user: user,
            //         report: report,
            //         address: address,
            //         pincodeOfIncident: pincodeOfIncident,
            //         mimeType: mimeType,
            //         note: note,
            //     },
            //     {
            //         headers: {
            //             'content-type': 'multipart/form-data',
            //         },
            //     }
            // );
            console.log(data)
            const res = await fetch('https://womensecbackend.onrender.com/api/v1/incidents', {
                method: "POST",
                headers: { 'Content-type': 'multipart/form-data' },
                body: JSON.stringify(data)
            })
            if (res.status === 201) {
                toast.success('Report Sent Successfully');
            } else {
                alert(res.status)
            }
        } catch (err) {
            toast.error('Error in Sending Report');
            console.log(err)
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Navbar />
            <div className='marginStyle'>
                <div className="container d-flex justify-content-center align-items-center">
                    <div className="row border rounded-5 p-3 bg-white shadow box-area reverseCol">
                        <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box">
                            <div className="featured-image mb-3 animateImg">
                                <img src={reports} className="img-fluid" alt="Report" />
                            </div>
                        </div>
                        <form className="col-md-6 right-box" onSubmit={handleSubmit}>
                            <div className="row align-items-center">
                                <div className="header-text mb-4">
                                    <h2>Incident report</h2>
                                    <p>We use your Incident report, we will take action against it!</p>
                                </div>
                                <div className="input-group d-flex align-items-center mb-3">
                                    <div className="form-outline flex-fill mb-0">
                                        <textarea
                                            type="text"
                                            value={report}
                                            onChange={(e) => setReport(e.target.value)}
                                            className="form-control form-control-lg border-dark fs-6"
                                            placeholder="Write the Report of the Incident"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="input-group d-flex align-items-center mb-3">
                                    <div className="form-outline flex-fill mb-0">
                                        <input
                                            type="number"
                                            value={pincodeOfIncident}
                                            onChange={(e) => setPincodeOfIncident(e.target.value)}
                                            className="form-control form-control-lg border-dark fs-6"
                                            placeholder="Enter the pin of the Incident Pin"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="input-group d-flex align-items-center mb-3">
                                    <div className="form-outline flex-fill mb-0">
                                        <input
                                            type="text"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            className="form-control form-control-lg border-dark fs-6"
                                            placeholder="Enter the Address of the Incident"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="input-group d-flex align-items-center mb-3">
                                    <div className="form-outline flex-fill mb-0">
                                        <input
                                            type="file"
                                            onChange={handleFileChange}
                                            className="form-control form-control-lg border-dark fs-6"
                                            placeholder="Enter the pin of the Incident Place"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="d-flex align-items-center my-3">
                                    <div className="form-outline flex-fill mb-0">
                                        <button
                                            className="btn text-white btn-lg btn-block"
                                            style={{ width: '100%', backgroundColor: 'blueviolet' }}
                                            type="submit"
                                        >
                                            Submit Incident
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Report;