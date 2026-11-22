using Microsoft.Data.Sqlite;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();
builder.Services.AddCors(options =>
{
    options.AddPolicy("ReactApp", policy =>
    {
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});
var app = builder.Build();
var dbPath = Path.Combine(
    builder.Environment.ContentRootPath,
    "New folder",
    "Courses.db"
);

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();

app.UseRouting();
app.UseCors("ReactApp");

app.UseAuthorization();

app.MapStaticAssets();
app.MapRazorPages()
   .WithStaticAssets();


using (var connection = new SqliteConnection($"Data Source={dbPath}"))
{
    connection.Open();
    Console.WriteLine("SQLite connection successful!");
    using var command = connection.CreateCommand();
command.CommandText = "SELECT COUNT(*) FROM \"course-list\"";
Console.WriteLine($"Courses found: {command.ExecuteScalar()}");
}
app.MapGet("/api/courses", () =>
{
    using var connection = new SqliteConnection($"Data Source={dbPath}");

connection.Open();

using var command = connection.CreateCommand();
    command.CommandText = @"SELECT
    CourseTitle,
    CourseType,
    CourseSummary,
    CourseAwardName,
    UcasCode,
    UcasPoints,
    StudyLength
FROM ""course-list""";

    using var reader = command.ExecuteReader();
    var courses = new List<Dictionary<string, object?>>();
    while (reader.Read())
    {
        var course = new Dictionary<string, object?>();
        for (var i = 0; i < reader.FieldCount; i++)
        {
            course[reader.GetName(i)] = reader.IsDBNull(i) ? null : reader.GetValue(i);
        }
        courses.Add(course);
    }

    return Results.Ok(courses);
});
app.Run();
