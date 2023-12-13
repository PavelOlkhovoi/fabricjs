import { nanoid } from "nanoid";
export const oldLibraryExtractor = (data) => {
  if (!data) {
    return [];
  } else {
    const groupIcons = [];
    const uniqueGroupNames = [];
    const uniqueSectionNames = [];

    data.forEach((icon) => {
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

    console.log("xxx groupIcons", JSON.stringify(groupIcons, null, 2));

    return groupIcons;
  }
};
export const libraryExtractor = (data) => {
  if (!data) {
    return [];
  } else {
    const sections = [];
    const uniqueSectionNames = [];

    data.forEach((icon) => {
      // console.log("xxx icon", icon);

      if (!uniqueSectionNames.includes(icon.section)) {
        uniqueSectionNames.push(icon.section);
        sections.push({
          id: nanoid(),
          sectionTitle: icon.section,
          groups: [],
        });
      }

      const targetSection = sections.find(
        (section) => section.sectionTitle === icon.section
      );

      if (
        !targetSection.groups.some((group) => group.groupTitle === icon.group)
      ) {
        targetSection.groups.push({
          id: nanoid(),
          groupTitle: icon.group,
          iconsArr: [],
        });
      }

      const targetGroup = targetSection.groups.find(
        (group) => group.groupTitle === icon.group
      );

      targetGroup.iconsArr.push({
        iconId: nanoid(),
        fileName: icon.fileName,
        iconsTitle: icon.title,
      });
    });

    console.log("xxx sections", sections);

    return sections;
  }
};
// export const allIconExtractor = (data) => {
//   if (!data) {
//     return [];
//   } else {
//     const sectionArr = [];
//     const groupIcons = [];
//     const uniqueGroupNames = [];
//     const uniqueSectionNames = [];

//     data.forEach((icon) => {
//       if (uniqueGroupNames.includes(icon.group)) {
//         const targetObjIngroupIconsArr = groupIcons.find(
//           (g) => g.groupTitle === icon.group
//         );
//         targetObjIngroupIconsArr.iconsArr.push({
//           iconId: nanoid(),
//           icon: icon.id,
//           description: icon.description,
//           group: icon.group,
//           groupFolder: icon.group.toLowerCase().replace(/\s+/g, "-"),
//           section: icon.section.toLowerCase(),
//           name: buildIconPathFromLink(icon.link),
//         });
//       } else {
//         groupIcons.push({
//           id: nanoid(),
//           groupTitle: icon.group,
//           groupSection: icon.section,
//           iconsArr: [
//             {
//               iconId: nanoid(),
//               icon: icon.id,
//               description: icon.description,
//               group: icon.group,
//               groupFolder: icon.group.replace(/\s+/g, "-"),
//               section: icon.section.toLowerCase(),
//               name: buildIconPathFromLink(icon.link),
//             },
//           ],
//         });

//         uniqueGroupNames.push(icon.group);
//       }
//     });

//     groupIcons.forEach((group) => {
//       if (uniqueSectionNames.includes(group.groupSection)) {
//         const targetSection = sectionArr.find(
//           (section) => group.groupSection === section.title
//         );

//         targetSection.groupArr = [...targetSection.groupArr, group];
//       } else {
//         const newSection = {
//           title: group.groupSection,
//           groupArr: [group],
//         };
//         sectionArr.push(newSection);
//         uniqueSectionNames.push(group.groupSection);
//       }
//     });

//     console.log("xxx all groupIcons", sectionArr);

//     return groupIcons;
//   }
// };

// function buildIconPathFromLink(link) {
//   const linkArr = link.split("/");
//   return linkArr[linkArr.length - 1];
// }
