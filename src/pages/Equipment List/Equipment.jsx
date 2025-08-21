import { useEffect } from "react";
import useEquipmentStore from "../../stores/equipmentsStore";
import ApiErrorScreen from "../../Core/ApiErrorScreen";
import EmployersSkeleton from "../Employers List/Skeleton/EmployersSkeleton"
import EquipmentManagement from "./Components/EqupimentManagement";

const Equipment = () => {

    const { equipments, loading, error, fetchEquipments } = useEquipmentStore();

    useEffect(() => {
        fetchEquipments()
    }, []);

    if (loading) {
        return <EmployersSkeleton />
    }
    if (error) {
        return <ApiErrorScreen />
    }

    return (
        <EquipmentManagement mockEquipmentData={equipments}/>
    );
};

export default Equipment;