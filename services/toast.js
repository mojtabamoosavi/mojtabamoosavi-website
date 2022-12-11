import { toast as reactToast, Slide } from "react-toastify";
import Icon from "@mdi/react";
import { mdiAlertOutline, mdiCheckCircleOutline, mdiCloseCircleOutline, mdiInformationOutline } from "@mdi/js";

function renderIcon(type) {
    switch (type) {
        case "info":
            return <Icon path={mdiInformationOutline} />;
        case "success":
            return <Icon path={mdiCheckCircleOutline} />;
        case "default":
            return "";
        case "warning":
            return <Icon path={mdiAlertOutline} />;
        case "error":
            return <Icon path={mdiCloseCircleOutline} />;
        default:
            return "";
    }
}

function toast(content, option) {
    reactToast(content, {
        type: option?.type || "success",
        position: "bottom-center",
        closeOnClick: true,
        draggable: false,
        theme: "colored",
        hideProgressBar: true,
        transition: Slide,
        icon: ({ type }) => renderIcon(type),
        ...option,
    });
}

export default toast;
