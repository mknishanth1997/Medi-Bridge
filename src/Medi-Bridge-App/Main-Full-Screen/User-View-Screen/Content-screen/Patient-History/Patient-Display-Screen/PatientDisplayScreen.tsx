import './PatientDisplayScreen.css';
import { pickRandomLink } from '../Patient-History-Table/PatientHistoryTable';
import { PencilIcon } from '../../../../../../assets/icons/SVGCODE';
import { FaWhatsapp } from 'react-icons/fa';
import { FaRegMessage } from 'react-icons/fa6';
import { IoCallOutline } from 'react-icons/io5';
import { RiTelegram2Line } from 'react-icons/ri';
import { FiAirplay, FiTrash2 } from 'react-icons/fi';
import { FiEdit, FiFolder, FiArrowDownCircle, FiEdit2 } from 'react-icons/fi';
import { TooltipWrapper } from '../../../../../../ToolTipWrapper/ToolTipWrapper';
import { AlertDialogWrapper } from '../../../../../../Alert-Dialog-Radix/AlertDialogRadix';
import { useEffect, useState } from 'react';
import { FaHeartbeat, FaWeight, FaRulerVertical, FaTint } from 'react-icons/fa';
import { MdContactPage } from 'react-icons/md';
export function PatientDisplayScreen({ patientId, setIsPtntScrnVisible }) {
  const [diagnosisActiveScreen, setDiagnosisActiveScreen] = useState('2');
  const totalMoney = a => {
    if (!a?.visits || !Array.isArray(a.visits)) return 0;

    return a.visits.reduce((acc, curr) => acc + (curr?.history?.amountPaid ?? 0), 0);
  };

  console.log(totalMoney(patientId));

  useEffect(() => {
    const handleEsc = e => {
      if (e.key === 'Escape') {
        setIsPtntScrnVisible(false);
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [setIsPtntScrnVisible]);
  return (
    <div className="patient-display-container">
      <div className="butt-button">
        <button className="print">Print</button>
        <button className="edit" onClick={() => setIsPtntScrnVisible(false)}>
          Close
        </button>
      </div>
      <div className="patient-display-body">
        <div className="patient-display-body-left">
          <div className="patient-display-profile-card">
            <div
              className="imgdsf"
              style={{
                backgroundImage: `url(${pickRandomLink(patientId.gender)})`,
              }}
            >
              {/* <img
                className="patient-display-profile-card__image"
                src={pickRandomLink('male')}
                alt="Profile"
              /> */}
            </div>
            <div className="patient-display-profile-card__text-details">
              <p className="patient-display-profile-card__name">{patientId?.name || 'No data'}</p>
              <p className="patient-display-profile-card__phone">
                {patientId?.phoneNumber || 'No data'}
              </p>
              <p className="patient-display-profile-card__email">
                {patientId?.emailId || 'No data'}
              </p>
              <p className="dsfladsfsd-para">
                Patient details will appear here once entered. This card provides a quick overview
                of key information, including name, age, and recent visit details.
              </p>
              <div className="iconsandshit">
                {/* <TooltipWrapper content={'message the patient on whatsapp'}>
                  <FaWhatsapp size={24} className="icon-hover" />
                </TooltipWrapper>
                <TooltipWrapper content={'message the patient'}>
                  <FaRegMessage size={24} className="icon-hover" />
                </TooltipWrapper>
                <TooltipWrapper content={'Call the Patient'}>
                  <IoCallOutline size={24} className="icon-hover" />
                </TooltipWrapper>
                <TooltipWrapper content={'message the patient on Telegram'}>
                  <RiTelegram2Line size={24} className="icon-hover" />
                </TooltipWrapper>
                <TooltipWrapper content={'Stream the Patient Files'}>
                  <FiAirplay size={24} className="icon-hover" />
                </TooltipWrapper>
                <TooltipWrapper content={'Edit the Patient Files'}>
                  <FiEdit size={24} className="icon-hover" />
                </TooltipWrapper>

                <TooltipWrapper content={'Access Patient Files'}>
                  <FiFolder size={24} className="icon-hover"></FiFolder>
                </TooltipWrapper>
                <TooltipWrapper content={'Download Patient Files'}>
                  <FiArrowDownCircle size={24} className="icon-hover"></FiArrowDownCircle>
                </TooltipWrapper> */}
                <AlertDialogWrapper
                  trigger={
                    <button style={{ all: 'unset', cursor: 'pointer' }}>
                      <TooltipWrapper content="Message the patient on WhatsApp">
                        <FaWhatsapp size={24} className="icon-hover" />
                      </TooltipWrapper>
                    </button>
                  }
                  title="Send a WhatsApp message?"
                  description="Are you sure you want to open WhatsApp to message this patient?"
                  actionLabel="Yes, send"
                  cancelLabel="Cancel"
                  onAction={() => console.log('Opened WhatsApp to send message')}
                />

                <AlertDialogWrapper
                  trigger={
                    <button style={{ all: 'unset', cursor: 'pointer' }}>
                      <TooltipWrapper content="Message the patient">
                        <FaRegMessage size={24} className="icon-hover" />
                      </TooltipWrapper>
                    </button>
                  }
                  title="Send a text message?"
                  description="Are you sure you want to open your messaging app to text this patient?"
                  actionLabel="Yes, send"
                  cancelLabel="Cancel"
                  onAction={() => console.log('Opened messaging app to send a text')}
                />

                <AlertDialogWrapper
                  trigger={
                    <button style={{ all: 'unset', cursor: 'pointer' }}>
                      <TooltipWrapper content="Call the Patient">
                        <IoCallOutline size={24} className="icon-hover" />
                      </TooltipWrapper>
                    </button>
                  }
                  title="Call the patient?"
                  description="Are you sure you want to call this patient now?"
                  actionLabel="Yes, call"
                  cancelLabel="Cancel"
                  onAction={() => console.log('Calling patient')}
                />

                <AlertDialogWrapper
                  trigger={
                    <button style={{ all: 'unset', cursor: 'pointer' }}>
                      <TooltipWrapper content="Message the patient on Telegram">
                        <RiTelegram2Line size={24} className="icon-hover" />
                      </TooltipWrapper>
                    </button>
                  }
                  title="Send a Telegram message?"
                  description="Are you sure you want to open Telegram to message this patient?"
                  actionLabel="Yes, send"
                  cancelLabel="Cancel"
                  onAction={() => console.log('Opened Telegram to send message')}
                />

                <AlertDialogWrapper
                  trigger={
                    <button style={{ all: 'unset', cursor: 'pointer' }}>
                      <TooltipWrapper content="Stream the Patient Files">
                        <FiAirplay size={24} className="icon-hover" />
                      </TooltipWrapper>
                    </button>
                  }
                  title="Stream patient files?"
                  description="Are you sure you want to begin streaming the patient's files to another device?"
                  actionLabel="Yes, stream"
                  cancelLabel="Cancel"
                  onAction={() => console.log('Streaming patient files')}
                />

                <AlertDialogWrapper
                  trigger={
                    <button style={{ all: 'unset', cursor: 'pointer' }}>
                      <TooltipWrapper content="Edit the Patient Files">
                        <FiEdit size={24} className="icon-hover" />
                      </TooltipWrapper>
                    </button>
                  }
                  title="Edit patient files?"
                  description="Are you sure you want to open the patient's files for editing?"
                  actionLabel="Yes, edit"
                  cancelLabel="Cancel"
                  onAction={() => console.log('Editing patient files')}
                />

                <AlertDialogWrapper
                  trigger={
                    <button style={{ all: 'unset', cursor: 'pointer' }}>
                      <TooltipWrapper content="Access Patient Files">
                        <FiFolder size={24} className="icon-hover"></FiFolder>
                      </TooltipWrapper>
                    </button>
                  }
                  title="Access patient files?"
                  description="Are you sure you want to open this patient's folder?"
                  actionLabel="Yes, open"
                  cancelLabel="Cancel"
                  onAction={() => console.log('Accessing patient files')}
                />

                <AlertDialogWrapper
                  trigger={
                    <button style={{ all: 'unset', cursor: 'pointer' }}>
                      <TooltipWrapper content="Download Patient Files">
                        <FiArrowDownCircle size={24} className="icon-hover"></FiArrowDownCircle>
                      </TooltipWrapper>
                    </button>
                  }
                  title="Download patient files?"
                  description="Are you sure you want to download all files for this patient?"
                  actionLabel="Yes, download"
                  cancelLabel="Cancel"
                  onAction={() => console.log('Downloading patient files')}
                />
              </div>
            </div>
          </div>

          <div className="patient-display-generalinfo-card">
            <div className="pgc-header">
              <p className="pgc-title">General Information</p>
              <PencilIcon className="pgc-pencil-icon" size={20} color="#bbb" />
            </div>
            <div className="pgc-body">
              <div className="pgc-info-row">
                <p className="pgc-label">Date of birth:</p>
                <p className="pgc-value">19.07.1997</p>
              </div>
              <div className="pgc-info-row">
                <p className="pgc-label">Age:</p>
                <p className="pgc-value">{patientId?.age || 'No data'}</p>
              </div>
              <div className="pgc-info-row">
                <p className="pgc-label">No of Visits:</p>
                <p className="pgc-value">{patientId.visits.length}</p>
              </div>
              <div className="pgc-info-row">
                <p className="pgc-label">Money Generated:</p>
                <p className="pgc-value">{`${totalMoney(patientId)} Rs`}</p>
              </div>
            </div>
          </div>

          <div className="patient-display-diagnosis-card">
            <div className="diagnosis-navigation">
              <p
                className={diagnosisActiveScreen === '1' ? 'future-visit active' : ''}
                onClick={() => setDiagnosisActiveScreen('1')}
              >
                Future Visit's
              </p>
              <p
                className={diagnosisActiveScreen === '2' ? 'future-visit active' : ''}
                onClick={() => setDiagnosisActiveScreen('2')}
              >
                Past Visit's
              </p>
              <p
                className={diagnosisActiveScreen === '3' ? 'future-visit active' : ''}
                onClick={() => setDiagnosisActiveScreen('3')}
              >
                Pending Treatment
              </p>
            </div>
            <div className="diagnosis-report">
              <div className="db1 drb">
                <div className="colored-sec-dr"></div>
                {patientId.visits.map(visit => (
                  <div key={visit.visitId} className="actual-diag-report">
                    <div className="visit-date">
                      <p>{visit.time || 'No time'}</p>
                      <p>{visit.date || 'No date'}</p>
                    </div>

                    <div className="Diagnosis">
                      <p>Diagnosis</p>
                      <p>{visit.history?.diagnosis || 'No diagnosis available'}</p>
                    </div>

                    <div className="Medicine">
                      <p>Medicine</p>
                      <ul>
                        {(Array.isArray(visit.history?.prescribedMedication)
                          ? visit.history.prescribedMedication
                          : (visit.history?.prescribedMedication || '')
                              .split(',')
                              .map(med => med.trim())
                        ).map((med, i) => (
                          <li key={i}>{med || 'No medicine'}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="additional-info">
                      {visit.history?.additionalNotes || 'No additional info'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="patient-display-body-right">
          <div className="vitals">
            <h1 id="vitals">
              <span>V</span>itals
            </h1>

            <div className="vital-item">
              <div className="vital-label-header">
                <FaHeartbeat size={24} color="red" className="vital-icon" />
                <p className="vital-label">Heart Rate:</p>
              </div>
              <p className="vital-value">
                {patientId.visits?.[0]?.vitals?.heartRate
                  ? `${patientId.visits[0].vitals.heartRate} bpm`
                  : 'No data'}
              </p>
            </div>

            <div className="vital-item">
              <div className="vital-label-header">
                <FaTint size={24} color="red" className="vital-icon" />
                <p className="vital-label">Blood Pressure</p>
              </div>
              <p className="vital-value">{patientId.visits?.[0]?.vitals?.bp || 'No data'}</p>
            </div>

            <div className="vital-item">
              <div className="vital-label-header">
                <FaRulerVertical color="red" size={24} className="vital-icon" />
                <p className="vital-label">Height</p>
              </div>
              <p className="vital-value">
                {patientId.visits?.[0]?.vitals?.height
                  ? `${patientId.visits[0].vitals.height} cm`
                  : 'No data'}
              </p>
            </div>

            <div className="vital-item">
              <div className="vital-label-header">
                <FaWeight size={24} color="red" className="vital-icon" />
                <p className="vital-label">Weight</p>
              </div>
              <p className="vital-value">
                {patientId.visits?.[0]?.vitals?.weight
                  ? `${patientId.visits[0].vitals.weight} kg`
                  : 'No data'}
              </p>
            </div>
          </div>

          <div className="filesfiles">
            {' '}
            <div class="files-container">
              <div class="files-header">
                <h2>Files</h2>
                <button class="download-button" onclick="alert('Downloading all files...')">
                  <span>Download All</span>
                  <i class="fas fa-download"></i>
                </button>
              </div>

              <div class="files-list">
                <div class="file-item">
                  <div class="file-info">
                    <i class="fas fa-file-alt icon"></i>
                    <span>Medical_Report_2023.pdf</span>
                  </div>
                  <div class="file-actions">
                    <button class="action-button edit" onclick="alert('Editing file...')">
                      <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-button delete" onclick="alert('Deleting file...')">
                      <i class="fas fa-trash-alt"></i>
                    </button>
                  </div>
                </div>
                <div class="file-item">
                  <div class="file-info">
                    <i class="fas fa-file-alt icon"></i>
                    <span>Medical_Report_2023.pdf</span>
                  </div>
                  <div class="file-actions">
                    <button class="action-button edit" onclick="alert('Editing file...')">
                      <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-button delete" onclick="alert('Deleting file...')">
                      <i class="fas fa-trash-alt"></i>
                    </button>
                  </div>
                </div>
                <div class="file-item">
                  <div class="file-info">
                    <i class="fas fa-file-alt icon"></i>
                    <span>Medical_Report_2023.pdf</span>
                  </div>
                  <div class="file-actions">
                    <button class="action-button edit" onclick="alert('Editing file...')">
                      <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-button delete" onclick="alert('Deleting file...')">
                      <i class="fas fa-trash-alt"></i>
                    </button>
                  </div>
                </div>

                <div class="file-item">
                  <div class="file-info">
                    <i class="fas fa-file-alt icon"></i>
                    <span>Prescription_August.docx</span>
                  </div>
                  <div class="file-actions">
                    <button class="action-button edit" onclick="alert('Editing file...')">
                      <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-button delete" onclick="alert('Deleting file...')">
                      <i class="fas fa-trash-alt"></i>
                    </button>
                  </div>
                </div>

                <div class="file-item">
                  <div class="file-info">
                    <i class="fas fa-file-alt icon"></i>
                    <span>X-Ray_Results.jpg</span>
                  </div>
                  <div class="file-actions">
                    <button class="action-button edit" onclick="alert('Editing file...')">
                      <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-button delete" onclick="alert('Deleting file...')">
                      <i class="fas fa-trash-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
