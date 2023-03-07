const todoList = () => {
    all = [];
    const add = (todoItem) => {
      all.push(todoItem);
    };
    const markAsComplete = (index) => {
      all[index].completed = true;
    };
  
    const overdue = () => {
      let overDueDate = all.filter((event) => {
        return event.dueDate == yesterday;
      });
  
      const overDueFunction = () => {
        for (let i = 0; i < overDueDate.length; i++) {
          if (overDueDate[i].completed == false) {
            console.log(`[ ] ${overDueDate[i].title} ${overDueDate[i].dueDate}`);
          } else if (overDueDate[i].completed == true) {
            console.log(`[x] ${overDueDate[i].title} ${overDueDate[i].dueDate}`);
          }
        }
      };
  
      overDueFunction();
    };
  
    const dueToday = () => {
      let dueTodayDate = all.filter((event) => {
        return event.dueDate == today;
      });
  
      const dueTodayFunction = () => {
        for (let i = 0; i < dueTodayDate.length; i++) {
          if (dueTodayDate[i].completed == false) {
            console.log(`[ ] ${dueTodayDate[i].title}`);
          } else if (dueTodayDate[i].completed == true) {
            console.log(`[x] ${dueTodayDate[i].title}`);
          }
        }
      };
  
      dueTodayFunction();
    };
  
    const dueLater = () => {
      // Write the date check condition here and return the array
      // of todo items that are due later accordingly.
      let dueLaterDate = all.filter((event) => {
        return event.dueDate == tomorrow;
      });
  
      const dueLaterFunction = () => {
        for (let i = 0; i < dueLaterDate.length; i++) {
          if (dueLaterDate[i].completed == false) {
            console.log(
              `[ ] ${dueLaterDate[i].title} ${dueLaterDate[i].dueDate}`
            );
          } else if (dueLaterDate[i].completed == true) {
            console.log(
              `[x] ${dueLaterDate[i].title} ${dueLaterDate[i].dueDate}`
            );
          }
        }
      };
  
      dueLaterFunction();
    };
  
    const toDisplayableList = (list) => {};
  
    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList,
    };
  };
  
  // ####################################### #
  // DO NOT CHANGE ANYTHING BELOW THIS LINE. #
  // ####################################### #
  
  const todos = todoList();
  
  const formattedDate = (d) => {
    return d.toISOString().split("T")[0];
  };
  
  var dateToday = new Date();
  const today = formattedDate(dateToday);
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  );
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
  );
  
  todos.add({ title: "Submit assignment", dueDate: yesterday, completed: false });
  todos.add({ title: "Pay rent", dueDate: today, completed: true });
  todos.add({ title: "Service Vehicle", dueDate: today, completed: false });
  todos.add({ title: "File taxes", dueDate: tomorrow, completed: false });
  todos.add({ title: "Pay electric bill", dueDate: tomorrow, completed: false });
  
  console.log("My Todo-list\n");
  
  console.log("Overdue");
  var overdues = todos.overdue();
  var formattedOverdues = todos.toDisplayableList(overdues);
  console.log("\n");
  
  console.log("Due Today");
  let itemsDueToday = todos.dueToday();
  let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday);
  console.log("\n");
  
  console.log("Due Later");
  let itemsDueLater = todos.dueLater();
  let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater);
  console.log("\n\n");