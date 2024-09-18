import { TextInputProps, TouchableOpacityProps } from "react-native";

declare interface Patient {
  id: number;
  first_name: string;
  last_name: string;
  profile_image_url: string;
  age: number;
  gender: string;
  medical_conditions: string[];
}

declare interface HealthRecord {
  id: number;
  patient_id: number;
  heart_rate: number;
  blood_pressure: string;
  sleep_hours: number;
  calories_consumed: number;
  calories_burned: number;
  medications_taken: string[];
  last_updated: string;
}

declare interface MarkerData {
  latitude: number;
  longitude: number;
  id: number;
  title: string;
  profile_image_url: string;
  specialization: string;
  rating: number;
  first_name: string;
  last_name: string;
  availability_time?: string;
  consultation_fee?: string;
}

declare interface MapProps {
  destinationLatitude?: number;
  destinationLongitude?: number;
  onDoctorsNearbyCalculated?: (doctorsWithTimes: MarkerData[]) => void;
  selectedDoctor?: number | null;
  onMapReady?: () => void;
}

declare interface Consultation {
  patient_id: number;
  doctor_id: number;
  symptoms: string[];
  diagnosis: string;
  prescribed_medications: string[];
  consultation_date: string;
  follow_up_date?: string;
  payment_status: string;
}

declare interface ButtonProps extends TouchableOpacityProps {
  title: string;
  bgVariant?: "primary" | "secondary" | "danger" | "outline" | "success";
  textVariant?: "primary" | "default" | "secondary" | "danger" | "success";
  IconLeft?: React.ComponentType<any>;
  IconRight?: React.ComponentType<any>;
  className?: string;
}

declare interface InputFieldProps extends TextInputProps {
  label: string;
  icon?: any;
  secureTextEntry?: boolean;
  labelStyle?: string;
  containerStyle?: string;
  inputStyle?: string;
  iconStyle?: string;
  className?: string;
}

declare interface PaymentProps {
  fullName: string;
  email: string;
  amount: string;
  doctorId: number;
  consultationDate: string;
}

declare interface LocationStore {
  userLatitude: number | null;
  userLongitude: number | null;
  userAddress: string | null;
  destinationLatitude: number | null;
  destinationLongitude: number | null;
  destinationAddress: string | null;
  setUserLocation: ({
    latitude,
    longitude,
    address,
  }: {
    latitude: number;
    longitude: number;
    address: string;
  }) => void;
  setDestinationLocation: ({
    latitude,
    longitude,
    address,
  }: {
    latitude: number;
    longitude: number;
    address: string;
  }) => void;
}

declare interface DoctorStore {
  doctors: MarkerData[];
  selectedDoctor: number | null;
  setSelectedDoctor: (doctorId: number) => void;
  setDoctors: (doctors: MarkerData[]) => void;
  clearSelectedDoctor: () => void;
}

declare interface DoctorCardProps {
  item: MarkerData;
  selected: number;
  setSelected: () => void;
}
