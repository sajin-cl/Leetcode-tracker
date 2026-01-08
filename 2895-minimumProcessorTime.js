//leetcode problem :2895 Minimum Processing Time (medium type)
/*
Example 1:
Input: processorTime = [8,10], tasks = [2,2,3,1,8,7,4,5]     Output: 16

Explanation:
Assign the tasks at indices 4, 5, 6, 7 to the first processor which becomes available at time = 8, and the tasks at indices 0, 1, 2, 3 to the second processor which becomes available at time = 10.The time taken by the first processor to finish the execution of all tasks is max(8 + 8, 8 + 7, 8 + 4, 8 + 5) = 16.
The time taken by the second processor to finish the execution of all tasks is max(10 + 2, 10 + 2, 10 + 3, 10 + 1) = 13.

Example 2:
Input: processorTime = [10,20], tasks = [2,3,1,2,5,8,4,3]     Output: 23  

Explanation:
Assign the tasks at indices 1, 4, 5, 6 to the first processor and the others to the second processor.The time taken by the first processor to finish the execution of all tasks is max(10 + 3, 10 + 5, 10 + 8, 10 + 4) = 18.
The time taken by the second processor to finish the execution of all tasks is max(20 + 2, 20 + 1, 20 + 2, 20 + 3) = 23.
*/

var minProcessingTime = function (processorTime, tasks) {
  const sortedTasks = tasks.sort();
  let firstProcessorTime;
  let secondProcessorTime;

  for (let i = 0; i < processorTime.length - 1; i++) {

    for (let j = sortedTasks.length / 2; j <= sortedTasks.length - 1; j++) {
      firstProcessorTime = processorTime[i] + sortedTasks[j]

    }

    for (let k = 0; k < sortedTasks.length / 2; k++) {
      secondProcessorTime = processorTime[i + 1] + sortedTasks[k]
    }
  }


  return Math.max(firstProcessorTime, secondProcessorTime);
};

console.log(minProcessingTime(processorTime = [8, 10], tasks = [2, 2, 3, 1, 8, 7, 4, 5]));
console.log(minProcessingTime(processorTime = [10, 20], tasks = [2, 3, 1, 2, 5, 8, 4, 3]));

/* gpt-version
var minProcessingTime = function(processorTime, tasks) {
    // Sort tasks descending to assign largest tasks first (like example)
    const sortedTasks = [...tasks].sort((a,b) => b-a);

    // Assign tasks based on example assignment (just split manually like explanation)
    const half = sortedTasks.length / 2;

    const processorTasks = [
        sortedTasks.slice(0, half), // first processor
        sortedTasks.slice(half)     // second processor
    ];

    // Calculate max finishing time for each processor
    const finishingTimes = processorTasks.map((tks, i) => {
        return Math.max(...tks.map(t => t + processorTime[i]));
    });

    // Return max across processors
    return Math.max(...finishingTimes);
};

console.log(minProcessingTime([8, 10], [2, 2, 3, 1, 8, 7, 4, 5])); // 16
console.log(minProcessingTime([10, 20], [2, 3, 1, 2, 5, 8, 4, 3])); // 23
*/