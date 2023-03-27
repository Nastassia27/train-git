test('should take olders', ()=>{
    const ages = [18,20,22,1,100,90,14];

    const oldAges = ages.filter(predicate);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})


test('should take courses', ()=>{
    const courses=[
        {title: 'css', price: 100},
        {title: 'JS', price: 200},
        {title: 'REACT', price: 150}
    ];

    const chipPredicate = courses.filter(course => course.price < 160);

    expect(chipCourses.length).toBe(2);
    expect(chipCourses[0].title).toBe('CSS');
    expect(chipCourses[1].title).toBe('REACT');
})

test('get only completed tasks', ()=>{
    const tasks = [
        {id: 1, title: 'bread', isDone: false},
        {id: 2, title: 'milk', isDone: true}
    ]

    const completedTasks = tasks.filter (task => task.isDone)
    expect(completedTasks.length).toBe(1)
    expect(completedTasks[0].id).toBe(2);

})

