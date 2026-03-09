import { confirmAlert } from "@raycast/api";
import { getExportFilePath } from "./constants/ente";
import { deleteEnteExport, getEnteExportDirPath } from "./helpers/ente";

export default async function Command() {
	let deleteFile = false;

	if (await confirmAlert({ title: "Do you want to delete the export file?" })) {
		deleteFile = true;
	} else {
		return;
	}

	if (deleteFile) {
		deleteEnteExport(getExportFilePath(getEnteExportDirPath()));
	}
}
