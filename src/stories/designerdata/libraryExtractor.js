import { nanoid } from "nanoid";

export const libraryExtractor = (data) => {
  if (!data) {
    return [];
  } else {
    const groupIcons = [];
    const uniqueGroupNames = [];

    data.forEach((icon) => {
      console.log("xxx icon extractor", icon);
      if (uniqueGroupNames.includes(icon.group)) {
        const targetObjIngroupIconsArr = groupIcons.find(
          (g) => g.groupTitle === icon.group
        );
        targetObjIngroupIconsArr.iconsArr.push({
          iconId: nanoid(),
          fileName: icon.fileName,
          iconsTitle: icon.title,
        });
      } else {
        groupIcons.push({
          id: nanoid(),
          groupTitle: icon.group,
          iconsArr: [
            {
              iconId: nanoid(),
              fileName: icon.fileName,
              iconsTitle: icon.title,
            },
          ],
        });

        uniqueGroupNames.push(icon.group);
      }
    });

    return groupIcons;
  }
};
