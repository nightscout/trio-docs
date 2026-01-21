from datetime import datetime, timezone

def define_env(env):
    # Define a macro that returns the current build date in UTC
    env.variables['build_date'] = datetime.now(timezone.utc).strftime('%B %d, %Y')
