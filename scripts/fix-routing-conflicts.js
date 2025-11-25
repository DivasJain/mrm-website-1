// Script to clean up any potential routing conflicts
// This will help identify and resolve the Next.js dynamic route conflict

const fs = require("fs")
const path = require("path")

function findDynamicRoutes(dir, routes = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      // Check if this is a dynamic route folder
      if (entry.name.startsWith("[") && entry.name.endsWith("]")) {
        const paramName = entry.name.slice(1, -1)
        const relativePath = path.relative(process.cwd(), fullPath)
        routes.push({
          path: relativePath,
          paramName: paramName,
          fullPath: fullPath,
        })
      }

      // Recursively search subdirectories
      findDynamicRoutes(fullPath, routes)
    }
  }

  return routes
}

console.log("Scanning for dynamic routes...")
const dynamicRoutes = findDynamicRoutes("./app")

console.log("Found dynamic routes:")
dynamicRoutes.forEach((route) => {
  console.log(`- ${route.path} (param: ${route.paramName})`)
})

// Check for conflicts
const routesByLevel = {}
dynamicRoutes.forEach((route) => {
  const pathParts = route.path.split("/")
  const level = pathParts.slice(0, -1).join("/") // Everything except the dynamic part

  if (!routesByLevel[level]) {
    routesByLevel[level] = []
  }
  routesByLevel[level].push(route)
})

console.log("\nChecking for conflicts...")
let hasConflicts = false

Object.entries(routesByLevel).forEach(([level, routes]) => {
  if (routes.length > 1) {
    const paramNames = [...new Set(routes.map((r) => r.paramName))]
    if (paramNames.length > 1) {
      console.log(`❌ CONFLICT at level "${level}":`)
      routes.forEach((route) => {
        console.log(`   - ${route.path} uses param "${route.paramName}"`)
      })
      hasConflicts = true
    }
  }
})

if (!hasConflicts) {
  console.log("✅ No routing conflicts found!")
  console.log("\nCurrent routing structure is clean:")
  dynamicRoutes.forEach((route) => {
    console.log(`✅ ${route.path} (${route.paramName})`)
  })
} else {
  console.log("\n🔧 To fix conflicts, ensure all dynamic routes at the same level use the same parameter name.")
}
