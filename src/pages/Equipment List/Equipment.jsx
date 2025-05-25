import { useEffect } from "react";
import EquipmentListingTable from "./Components/EquipmentListingTable";
import useEquipmentStore from "../../stores/equipmentsStore";
import ApiErrorScreen from "../../Core/ApiErrorScreen";
import EmployersSkeleton from "../Employers List/Skeleton/EmployersSkeleton"

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
        <EquipmentListingTable equipmentData={equipments} />
    );
};

export default Equipment;