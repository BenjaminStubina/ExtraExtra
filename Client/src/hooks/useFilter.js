import { useState } from "react";
import { pubs as pubArray } from "../data/constants";

export function useFilter() {
  const [filter, setFilter] = useState("all");
  const [group, setGroup] = useState([]);

  const handleClick = (sourceId, groupId) => {
    setFilter(sourceId);
    if (groupId === "filter") {
      const groupIds = pubArray
        .filter((item) => item.group === sourceId)
        .map((item) => item.id);
      setGroup(groupIds);
    } else {
      setGroup([]);
    }
  };

  return { filter, group, handleClick };
}
