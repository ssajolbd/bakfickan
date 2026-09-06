import React, { useState } from 'react';
import { Language, Reservation } from '../types';
import { X, Calendar, Clock, Users, Check, Download, MapPin, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onBookingSuccess: (reservation: Reservation) => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  lang,
  onBookingSuccess,
}) => {
  const [step, setStep] = useState<'form' | 'confirmed'>('form');
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [time, setTime] = useState('18:30');
  const [guests, setGuests] = useState(2);
  const [seatingArea, setSeatingArea] = useState<'dining_room' | 'fish_bar' | 'summer_terrace'>('dining_room');
  const [guestName, setGuestName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dietary, setDietary] = useState('');
  const [notes, setNotes] = useState('');
  const [confirmedBooking, setConfirmedBooking] = useState<Reservation | null>(null);

  if (!isOpen) return null;

  const timeSlots = [
    '11:30', '12:00', '12:30', '13:00', '13:30', '14:00',
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !email || !phone) return;

    const newReservation: Reservation = {
      id: `BKF-${Math.floor(1000 + Math.random() * 9000)}`,
      date,
      time,
      guests,
      seatingArea,
      guestName,
      email,
      phone,
      dietary,
      notes,
      createdAt: new Date().toISOString(),
    };

    setConfirmedBooking(newReservation);
    onBookingSuccess(newReservation);
    setStep('confirmed');
  };

  const handleDownloadCalendar = () => {
    if (!confirmedBooking) return;
    const startHour = parseInt(confirmedBooking.time.split(':')[0], 10);
    const startMin = parseInt(confirmedBooking.time.split(':')[1], 10);
    const dateFormatted = confirmedBooking.date.replace(/-/g, '');
    const startTimeStr = `${dateFormatted}T${startHour.toString().padStart(2, '0')}${startMin.toString().padStart(2, '0')}00`;
    const endTimeStr = `${dateFormatted}T${(startHour + 2).toString().padStart(2, '0')}${startMin.toString().padStart(2, '0')}00`;

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Bakfickan Visby//Reservation//EN',
      'BEGIN:VEVENT',
      `SUMMARY:Dinner at BAKFICKAN Visby (Ref: ${confirmedBooking.id})`,
      `DESCRIPTION:Table for ${confirmedBooking.guests} guests at Bakfickan, Stora Torget, Visby. Notes: ${confirmedBooking.notes || 'None'}`,
      `LOCATION:Stora Torget 1, 621 56 Visby, Gotland`,
      `DTSTART:${startTimeStr}`,
      `DTEND:${endTimeStr}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `bakfickan-reservation-${confirmedBooking.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleResetAndClose = () => {
    setStep('form');
    onClose();
  };

  const areaLabels = {
    dining_room: { en: 'Main Dining Room', sv: 'Klassiska Matsalen' },
    fish_bar: { en: 'Fish Bar Counter', sv: 'Fiskbaren vid isbädden' },
    summer_terrace: { en: 'Stora Torget Terrace', sv: 'Uteserveringen på Torget' },
  };

  return (
    <div
      id="reservation-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A1118]/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleResetAndClose();
      }}
    >
      <div
        id="reservation-modal-container"
        className="relative w-full max-w-xl bg-[#F7F5F0] text-[#161616] rounded-sm shadow-2xl overflow-hidden border border-[#C8A97E]/40 max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="px-6 sm:px-8 py-5 border-b border-[#C8A97E]/30 flex items-center justify-between bg-[#0A1118] text-[#F7F5F0]">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C8A97E] block font-medium">
              BAKFICKAN · STORA TORGET, VISBY
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F7F5F0]">
              {step === 'form'
                ? lang === 'en' ? 'Reserve a Table' : 'Boka Bord'
                : lang === 'en' ? 'Booking Confirmed' : 'Bokning Bekräftad'}
            </h3>
          </div>
          <button
            id="close-reservation-modal-btn"
            onClick={handleResetAndClose}
            className="p-2 text-[#F7F5F0]/70 hover:text-white rounded-full hover:bg-white/10 cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {step === 'form' ? (
            <form id="reservation-form" onSubmit={handleSubmit} className="space-y-6">
              {/* Date & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="booking-date" className="block text-xs uppercase tracking-wider text-[#555555] mb-1.5 font-medium">
                    {lang === 'en' ? 'Date' : 'Datum'}
                  </label>
                  <div className="relative">
                    <input
                      id="booking-date"
                      type="date"
                      required
                      value={date}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-white border border-[#161616]/20 rounded-xs px-3.5 py-2.5 text-sm text-[#161616] focus:outline-none focus:border-[#C8A97E]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="booking-guests" className="block text-xs uppercase tracking-wider text-[#555555] mb-1.5 font-medium">
                    {lang === 'en' ? 'Number of Guests' : 'Antal Gäster'}
                  </label>
                  <div className="relative">
                    <select
                      id="booking-guests"
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full bg-white border border-[#161616]/20 rounded-xs px-3.5 py-2.5 text-sm text-[#161616] focus:outline-none focus:border-[#C8A97E] cursor-pointer"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? (lang === 'en' ? 'guest' : 'gäst') : (lang === 'en' ? 'guests' : 'gäster')}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Time Slots */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#555555] mb-2 font-medium">
                  {lang === 'en' ? 'Select Sitting Time' : 'Välj Sittningstid'}
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      id={`time-slot-${slot.replace(':', '')}`}
                      onClick={() => setTime(slot)}
                      className={`py-2 text-xs rounded-xs border transition-all cursor-pointer ${
                        time === slot
                          ? 'bg-[#0A1118] text-[#C8A97E] border-[#0A1118] font-medium shadow-sm'
                          : 'bg-white border-[#161616]/15 text-[#161616]/80 hover:border-[#C8A97E]'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Seating Preference */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#555555] mb-2 font-medium">
                  {lang === 'en' ? 'Atmosphere & Seating Area' : 'Placering & Matsal'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {(['dining_room', 'fish_bar', 'summer_terrace'] as const).map((area) => (
                    <button
                      key={area}
                      type="button"
                      id={`seating-area-${area}`}
                      onClick={() => setSeatingArea(area)}
                      className={`p-3 rounded-xs border text-left transition-all cursor-pointer ${
                        seatingArea === area
                          ? 'bg-[#0A1118] text-[#F7F5F0] border-[#0A1118]'
                          : 'bg-white border-[#161616]/15 text-[#161616]/80 hover:border-[#C8A97E]'
                      }`}
                    >
                      <span className="block text-xs font-medium">{areaLabels[area][lang]}</span>
                      <span className={`block text-[10px] mt-0.5 ${seatingArea === area ? 'text-[#C8A97E]' : 'text-[#888888]'}`}>
                        {area === 'fish_bar'
                          ? (lang === 'en' ? 'Informal counter' : 'Livlig bar')
                          : area === 'dining_room'
                          ? (lang === 'en' ? 'Classic timber' : 'Varm träinredning')
                          : (lang === 'en' ? 'Square view' : 'Öppet vid torget')}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Guest Details */}
              <div className="space-y-4 pt-2 border-t border-[#161616]/10">
                <h4 className="text-xs uppercase tracking-wider text-[#161616] font-semibold">
                  {lang === 'en' ? 'Guest Contact Information' : 'Kontaktuppgifter'}
                </h4>

                <div>
                  <label htmlFor="guest-name" className="block text-xs text-[#555555] mb-1">
                    {lang === 'en' ? 'Full Name' : 'Fullständigt Namn'} *
                  </label>
                  <input
                    id="guest-name"
                    type="text"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="e.g. Astrid Lindgren"
                    className="w-full bg-white border border-[#161616]/20 rounded-xs px-3.5 py-2 text-sm text-[#161616] focus:outline-none focus:border-[#C8A97E]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="guest-email" className="block text-xs text-[#555555] mb-1">
                      {lang === 'en' ? 'Email Address' : 'E-post'} *
                    </label>
                    <input
                      id="guest-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full bg-white border border-[#161616]/20 rounded-xs px-3.5 py-2 text-sm text-[#161616] focus:outline-none focus:border-[#C8A97E]"
                    />
                  </div>
                  <div>
                    <label htmlFor="guest-phone" className="block text-xs text-[#555555] mb-1">
                      {lang === 'en' ? 'Phone Number' : 'Telefonnummer'} *
                    </label>
                    <input
                      id="guest-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+46 70 123 4567"
                      className="w-full bg-white border border-[#161616]/20 rounded-xs px-3.5 py-2 text-sm text-[#161616] focus:outline-none focus:border-[#C8A97E]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="guest-dietary" className="block text-xs text-[#555555] mb-1">
                    {lang === 'en' ? 'Allergies & Dietary Requirements' : 'Allergier & Specialkost'}
                  </label>
                  <input
                    id="guest-dietary"
                    type="text"
                    value={dietary}
                    onChange={(e) => setDietary(e.target.value)}
                    placeholder={lang === 'en' ? 'e.g. Gluten-free, Shellfish allergy, Pregnancy' : 't.ex. Glutenfritt, Skaldjursallergi'}
                    className="w-full bg-white border border-[#161616]/20 rounded-xs px-3.5 py-2 text-sm text-[#161616] focus:outline-none focus:border-[#C8A97E]"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <button
                id="submit-reservation-btn"
                type="submit"
                className="w-full bg-[#C8A97E] hover:bg-[#DFC7A5] text-[#0A1118] text-xs uppercase tracking-[0.2em] py-3.5 rounded-xs font-semibold transition-all cursor-pointer shadow-md active:scale-98"
              >
                {lang === 'en' ? 'Confirm Reservation' : 'Bekräfta Bordsbokning'}
              </button>
            </form>
          ) : (
            /* Confirmation View */
            <div id="reservation-confirmation-view" className="text-center space-y-6 py-4">
              <div className="w-14 h-14 bg-[#0A1118] text-[#C8A97E] border border-[#C8A97E] rounded-full flex items-center justify-center mx-auto">
                <Check className="w-7 h-7" />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] text-[#A9875A] block font-semibold">
                  {lang === 'en' ? 'VARMT VÄLKOMMEN!' : 'VARMT VÄLKOMMEN!'}
                </span>
                <h4 className="font-serif text-3xl text-[#161616]">
                  {lang === 'en' ? 'We look forward to welcoming you.' : 'Vi ser fram emot att välkomna er.'}
                </h4>
                <p className="text-sm text-[#555555] max-w-sm mx-auto font-light">
                  {lang === 'en'
                    ? `A confirmation email has been dispatched to ${confirmedBooking?.email}.`
                    : `En bekräftelse har skickats till ${confirmedBooking?.email}.`}
                </p>
              </div>

              {/* Booking Summary Card */}
              <div className="border border-[#161616]/15 rounded-xs p-6 bg-white text-left space-y-3 text-sm">
                <div className="flex justify-between border-b border-[#161616]/10 pb-3">
                  <span className="text-[#666666]">{lang === 'en' ? 'Booking Reference' : 'Bokningsnummer'}:</span>
                  <span className="font-mono font-semibold text-[#161616]">{confirmedBooking?.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#666666]">{lang === 'en' ? 'Guest' : 'Gäst'}:</span>
                  <span className="font-medium text-[#161616]">{confirmedBooking?.guestName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#666666]">{lang === 'en' ? 'Date & Time' : 'Datum & Tid'}:</span>
                  <span className="font-medium text-[#161616]">{confirmedBooking?.date} kl. {confirmedBooking?.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#666666]">{lang === 'en' ? 'Party Size' : 'Antal'}:</span>
                  <span className="font-medium text-[#161616]">{confirmedBooking?.guests} {lang === 'en' ? 'persons' : 'personer'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#666666]">{lang === 'en' ? 'Seating' : 'Plats'}:</span>
                  <span className="font-medium text-[#161616]">
                    {confirmedBooking && areaLabels[confirmedBooking.seatingArea][lang]}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  id="download-calendar-btn"
                  onClick={handleDownloadCalendar}
                  className="flex-1 inline-flex items-center justify-center space-x-2 border border-[#161616]/25 hover:border-[#161616] text-[#161616] text-xs uppercase tracking-wider py-3 rounded-xs transition-colors cursor-pointer bg-white"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{lang === 'en' ? 'Add to Calendar (.ics)' : 'Lägg i Kalender (.ics)'}</span>
                </button>
                <button
                  id="close-confirmation-btn"
                  onClick={handleResetAndClose}
                  className="flex-1 bg-[#161616] hover:bg-[#0A1118] text-[#F7F5F0] text-xs uppercase tracking-wider py-3 rounded-xs transition-colors cursor-pointer"
                >
                  {lang === 'en' ? 'Done' : 'Klar'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
