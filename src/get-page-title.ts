import { ExtendedRecordMap } from "notion_type_personal";

import { getBlockTitle } from "./get-block-title";

export function getPageTitle(recordMap: ExtendedRecordMap) {
  const pageBlock = recordMap.block[Object.keys(recordMap.block)[0]]?.value;

  if (pageBlock) {
    return getBlockTitle(pageBlock, recordMap);
  }

  return null;
}
